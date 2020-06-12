const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.get("/:slug/edit", pageController.page_edit_get);
router.post("/:slug/edit", pageController.page_edit_post);
router.get("/:slug/history", pageController.page_history_list_get);
router.get("/:slug/history/:id/diff", pageController.page_history_detail_get);
router.get("/:slug", pageController.page_preview_get);
router.post("/:slug", pageController.page_preview_post);

module.exports = router;
