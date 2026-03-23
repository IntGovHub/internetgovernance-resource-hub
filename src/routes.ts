import { Router } from "express";

const router = Router();

router.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

router.get("/api/config", (req, res) => {
  res.json({
    appName: 'Internet Governance Resource Hub',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

router.get("/api/colors", (req, res) => {
  res.json({
    primary: "#4f46e5",
    secondary: "#6366f1",
    accent: "#818cf8",
    background: "#f8fafc",
    text: "#0f172a"
  });
});

router.get("/api/docs", (req, res) => {
  res.json({
    message: "API Documentation",
    endpoints: [
      { method: "GET", path: "/api/config", description: "Get application configuration" },
      { method: "GET", path: "/api/colors", description: "Get theme color scheme" },
      { method: "GET", path: "/api/health", description: "Health check endpoint" },
      { method: "GET", path: "/api/docs", description: "API documentation" }
    ]
  });
});

export default router;
