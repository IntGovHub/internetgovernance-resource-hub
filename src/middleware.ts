import { Request, Response, NextFunction } from "express";

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

export const cacheControl = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'GET') {
    if (req.url.match(/\.(html|js|css|png|jpg|jpeg|gif|svg|ico)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    } else {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    }
  }
  next();
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Route not found" });
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error", message: err.message });
};
