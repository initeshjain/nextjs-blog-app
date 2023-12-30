import Post from "@/models/Post";
import connectDb from "@/middleware/mongoose";
import cors from "@/middleware/cors";

async function handler(req, res) {
  let data = await Post.find(
    { isActive: true },
    {
      slug: 1,
    }
  ).lean();

  const slugs = data.map((item) => `/blogs/${item.slug}`);

  res.status(200).json({ slugs: slugs });
}

export default cors(connectDb(handler));
