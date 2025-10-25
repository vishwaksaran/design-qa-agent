import express from "express";

const router = express.Router();

// Figma API routes
router.get("/", (req, res) => {
  res.json({ message: "Figma routes endpoint" });
});

router.post("/analyze", (req, res) => {
  const { figmaUrl, accessToken } = req.body;
  
  // TODO: Implement Figma design analysis
  res.json({
    message: "Figma analysis started",
    figmaUrl,
    status: "processing"
  });
});

export default router;
