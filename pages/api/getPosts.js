import Post from "@/models/Post";
import connectDb from "@/middleware/mongoose";
import cors from "@/middleware/cors";

async function handler(req, res) {
  const cacheSeconds = 60; // Cache for 60 seconds
  res.setHeader(
    "Cache-Control",
    `s-maxage=${cacheSeconds}, stale-while-revalidate`
  );

  const { categories, search, offset = 0, limit = 12 } = req.query;

  let Select = "title metadesc header_image slug updatedAt";

  let catArray = [];
  if (categories) {
    catArray = categories.split("|");
  }

  let searchText = "";
  if (search) {
    searchText = search;
  }

  let items = [];

  if (catArray.length > 0 && searchText) {
    items = await Post.find({
      $and: [
        {
          category: {
            $in: catArray,
          },
        },
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
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .select(Select)
      .sort({ updatedAt: -1 })
      .lean();
  } else if (catArray.length > 0) {
    items = await Post.find({
      $and: [
        {
          category: {
            $in: catArray,
          },
        },
        {
          isActive: true,
        },
      ],
    })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .select(Select)
      .sort({ updatedAt: -1 })
      .lean();
  } else if (searchText) {
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
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .select(Select)
      .sort({ updatedAt: -1 })
      .lean();
  } else {
    items = await Post.find({ isActive: true })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .select(Select)
      .sort({ updatedAt: -1 })
      .lean();
  }

  res.status(200).json(items);
}

export default cors(connectDb(handler));
