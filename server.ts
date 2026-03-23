import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";
import helmet from "helmet";
import { requestLogger, cacheControl, errorHandler } from "./src/middleware.js";
import apiRoutes from "./src/routes.js";
import { config } from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = config.port || 3000;

  // Security and performance middleware
  app.use(helmet({
    contentSecurityPolicy: false, // Disable for development/Vite
  }));
  app.use(compression());
  app.use(express.json());
  app.use(requestLogger);
  app.use(cacheControl);

  // API routes
  app.use(apiRoutes);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Error handler
  app.use(errorHandler);

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`${config.appName} v${config.version} running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
