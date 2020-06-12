const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

var HistorySchema = new Schema({
  page: { type: Schema.Types.ObjectId, ref: "Page", required: true },
  changelog: { type: String, default: "" },
  edit_date: { type: Date, require: true },
  diff: { type: String, require: true },
});

HistorySchema.virtual("edit_date_formatted").get(function () {
  return moment(this.edit_date).format("MMMM Do YYYY, h:mm:ss a");
});

module.exports = mongoose.model("History", HistorySchema);
