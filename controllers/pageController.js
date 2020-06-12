const Page = require("../models/page");
const History = require("../models/history");
const Diff = require("diff");
const async = require("async");

exports.page_preview_get = function (req, res, next) {
  async.series(
    {
      page: function (callback) {
        Page.findOne({ slug: req.params.slug }, function (err, page) {
          if (err) callback(err);
          else if (!page) callback("not found");
          else callback(null, page);
        });
      },
      slugs: function (callback) {
        Page.find({}, "slug", function (err, slugsResult) {
          if (err) {
            callback(err);
          } else {
            const slugs = slugsResult.map((v) => v.slug);
            callback(null, slugs);
          }
        });
      },
    },
    function (err, results) {
      if (typeof err == "string" && err == "not found") {
        res.render("page_create", { title: req.params.slug });
        return;
      }
      if (err) return next(err);
      res.render("preview", { page: results.page, slugs: results.slugs });
    }
  );
};

exports.page_preview_post = function (req, res, next) {
  let page = new Page({
    slug: req.body.slug,
    title: req.body.title,
    content: "",
  });

  page.save(function (err) {
    if (err) return next(err);
    res.redirect(page.url + "/edit");
  });
};

exports.page_edit_get = function (req, res, next) {
  Page.findOne({ slug: req.params.slug }, function (err, page) {
    if (err) return next(err);
    if (!page) {
      let err = new Error("Page Not Found");
      err.status = 404;
      return next(err);
    }
    res.render("edit", { page: page });
  });
};

exports.page_edit_post = async function (req, res, next) {
  let page = await Page.findOne({ slug: req.params.slug });
  const diff = Diff.createTwoFilesPatch(
    null,
    null,
    page.content,
    req.body.content
  );
  page.content = req.body.content;
  page.title = req.body.title;

  let history = new History({
    page: page._id,
    changelog: req.body.changelog,
    edit_date: new Date().toUTCString(),
    diff: diff,
  });

  async.parallel(
    [
      function (callback) {
        page.save(callback);
      },
      function (callback) {
        history.save(callback);
      },
    ],
    function (err) {
      if (err) return next(err);
      res.redirect(page.url);
    }
  );
};

exports.page_history_list_get = async function (req, res, next) {
  let page = await Page.findOne({ slug: req.params.slug });
  let historyList = await History.find(
    { page: page._id },
    "id page edit_date changelog"
  ).sort({ edit_date: -1 });
  res.render("history_list", {
    page: page,
    historyList: historyList,
  });
};

exports.page_history_detail_get = async function (req, res, next) {
  let history = await History.findById(req.params.id);
  res.render("history_detail", {
    diff: history.diff,
    edit_date: history.edit_date_formatted,
  });
};
