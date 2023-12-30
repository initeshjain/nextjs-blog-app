const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    header_image: { type: String },
    metadesc: { type: String, required: true },
    category: { type: String, require: true },
    keywords: { type: String, default: "" },
    link: { type: String, default: "" },
    link_text: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

mongoose.set("strictQuery", true);

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema);
