import Post from "@/models/Post";
import connectDb from "@/middleware/mongoose";
import cors from "@/middleware/cors";

async function handler(req, res) {
  const { limit = 10, query = "" } = req.query;

  let Select = "title slug metadesc header_image";

  let searchText = "";
  if (query) {
    searchText = query;
  }

  let items = [];

  if (searchText) {
    items = await Post.find({
      $and: [
        {
          title: {
            $regex: searchText,
            $options: "i",
          },
        },
        {
          isActive: true,
        },
      ],
    })
      .limit(parseInt(limit))
      .select(Select)
      .sort({ updatedAt: -1 })
      .lean();
  } else {
    items = await Post.find({ isActive: true })
      .limit(parseInt(limit))
      .select(Select)
      .sort({ updatedAt: -1 })
      .lean();
  }

  res.status(200).json(items);
}

export default cors(connectDb(handler));
