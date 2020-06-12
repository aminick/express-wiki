const Page = require("../models/page");

exports.search_get = function (req, res, next) {
  Page.find({ $text: { $search: req.query.q } }).exec(function (err, results) {
    if (err) return next(err);
    res.render("search", { results: results });
  });
};
