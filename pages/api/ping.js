import cors from "@/middleware/cors";

function handler(req, res) {
  res.status(200).json({ ping: "Hey" });
}

export default cors(handler);