import express from "express";

const router = express.Router();

// For demo: Secret API key (in real apps, use env vars and never expose secrets to frontend!)
const SECRET_API_KEY = process.env.SECRET_API_KEY; // Replace with your real key or use process.env.SECRET_API_KEY

// GET /api/get-secret
router.get("/get-secret", (req, res) => {
  res.json({ secret: SECRET_API_KEY });
});

export default router;