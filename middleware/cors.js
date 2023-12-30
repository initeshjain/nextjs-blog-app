const allowedOrigins = [
  "http://tiktook.in",
  "https://tiktook.in",
  "http://www.tiktook.in",
  "https://www.tiktook.in",
  "tiktook.in",
  "www.tiktook.in",
];

const cors = (handler) => (req, res) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  // Other CORS headers
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  return handler(req, res);
};

export default cors;
