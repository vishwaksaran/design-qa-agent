import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import figmaRoutes from "./routes/figma.js";
import analyzeRoutes from "./routes/analyze.js";
import reportRoutes from "./routes/report.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/figma", figmaRoutes);
app.use("/api/analyze", analyzeRoutes);
app.use("/api/report", reportRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));