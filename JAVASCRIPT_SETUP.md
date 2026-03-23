# JavaScript Project Structure & Guide

This project has been converted to a modern **Full-Stack JavaScript/TypeScript** application using **Express.js** as the backend and **React + Vite** as the frontend.

## 📁 Project Structure

```
internetgovernance-resource-hub/
├── config/
│   └── config.ts                 # Application configuration (Port, Theme, Routes)
├── src/
│   ├── components/               # React UI components
│   ├── middleware.ts             # Express middleware (Logger, Cache, Security)
│   ├── routes.ts                 # Express API route definitions
│   ├── utils.ts                  # Shared utility functions
│   ├── App.tsx                   # Main React application & routing
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global Tailwind CSS styles
├── public/                       # Static assets (images, icons)
├── .env.example                  # Environment variables template
├── package.json                  # NPM dependencies & scripts
├── server.ts                     # Main Express server (Vite middleware integration)
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite build configuration
├── serve.sh                      # Unix/Linux startup script
└── serve.bat                     # Windows startup script
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   **On Windows:**

   ```bash
   serve.bat
   ```

   **On macOS/Linux:**

   ```bash
   ./serve.sh
   ```

   **Or use npm:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` (The application is configured to run on port 3000 by default in this environment).

## 📦 NPM Scripts

| Script          | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start the full-stack development server    |
| `npm run build` | Build the React frontend for production    |
| `npm run preview`| Preview the production build locally      |
| `npm run lint`  | Run TypeScript type checking               |

## 🔧 Configuration

Application configuration is managed in [config/config.ts](config/config.ts):

```typescript
export const config = {
    appName: 'Internet Governance Resource Hub',
    version: '1.0.0',
    port: 3000,
    environment: 'development',
    colors: { /* theme colors */ },
    routes: [ /* navigation definitions */ ]
}
```

## 📡 API Endpoints

The application provides the following API endpoints via the Express backend:

### Configuration APIs

- **GET `/api/config`** - Get application configuration
- **GET `/api/colors`** - Get theme color scheme
- **GET `/api/health`** - Health check endpoint
- **GET `/api/docs`** - API documentation

### Example Request

```bash
curl http://localhost:3000/api/config
```

## 🛠️ Modules

### Middleware (`src/middleware.ts`)

- `requestLogger` - Logs all HTTP requests to the console
- `cacheControl` - Sets appropriate cache headers for static vs dynamic content
- `notFound` - Handles 404 errors for API routes
- `errorHandler` - Global error handler for the Express server

### Routes (`src/routes.ts`)

Manages all backend API routes. Frontend routes are managed by `react-router-dom` in `src/App.tsx`.

### Utilities (`src/utils.ts`)

Helper functions for common tasks:

- `formatDate()` - Format dates consistently
- `createSlug()` - Convert text to URL-friendly slugs
- `truncateText()` - Trim text with suffix
- `escapeHtml()` - Escape HTML special characters
- `highlightText()` - Highlight search terms in text
- `generateId()` - Generate unique IDs
- `isEmpty()` - Check if object is empty
- `deepClone()` - Deep clone objects

## 📝 Environment Variables

Create a `.env` file in the root directory to override defaults:

```env
PORT=3000
NODE_ENV=development
```

## 🔒 Security Features

- **Helmet.js** - HTTP headers security middleware
- **Compression** - Response compression for better performance
- **Cache Control** - Smart caching for static vs dynamic content
- **XSS Protection** - Security headers included via Helmet

## 📊 Development

### Adding New Frontend Routes

Edit [src/App.tsx](src/App.tsx) to add a new React route:

```tsx
<Route path="/new-section" element={<NewSectionPage />} />
```

### Adding New API Routes

Edit [src/routes.ts](src/routes.ts):

```typescript
router.get("/api/new-endpoint", (req, res) => {
  res.json({ data: "New data" });
});
```

### Adding New Utils

Edit [src/utils.ts](src/utils.ts) and export new functions:

```typescript
export function newUtil(params) {
  // implementation
}
```

## 📦 Key Dependencies

| Package     | Purpose                     |
| ----------- | --------------------------- |
| express     | Web framework (Backend)     |
| react       | UI library (Frontend)       |
| vite        | Build tool & Dev server     |
| tsx         | Run TypeScript files directly|
| helmet      | Security headers            |
| compression | Response compression        |
| lucide-react| Icon library                |
| motion      | Animation library           |

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port in `.env` or `config/config.ts`.

### Node Modules Issues

Clear and reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

**Last Updated:** March 23, 2026  
**Project Version:** 1.0.0
