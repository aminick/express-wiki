const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PageSchema = new Schema({
  slug: { type: String, required: true, min: 1, unique: true },
  title: { type: String, required: true, min: 1 },
  content: { type: String },
});

PageSchema.index({ "$**": "text" });

PageSchema.virtual("url").get(function () {
  return "/page/" + this.slug;
});

module.exports = mongoose.model("Page", PageSchema);
