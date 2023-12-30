import Post from "@/models/Post";
import connectDb from "@/middleware/mongoose";
import cors from "@/middleware/cors";

async function handler(req, res) {
  const cacheSeconds = 60; // Cache for 60 seconds
  res.setHeader(
    "Cache-Control",
    `s-maxage=${cacheSeconds}, stale-while-revalidate`
  );

  const { slug } = req.query;

  let item = await Post.findOne({ slug: slug }).lean();

  if (item === null || !item.isActive) {
    res.status(200).json(null);
    return;
  } else {
    res.status(200).json(item);
    return;
  }
}

export default cors(connectDb(handler));
