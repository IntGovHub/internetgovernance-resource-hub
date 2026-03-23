# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm install

# Copy source code
COPY . .

# Build the Vite frontend
RUN npm run build

# Runtime stage
FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy built frontend assets
COPY --from=builder /app/dist ./dist

# Copy server-side source code (required for tsx to run)
# We need config, src, and server.ts
COPY config/ ./config/
COPY src/ ./src/
COPY server.ts ./

# Create a non-root user
RUN groupadd -r nodejs && useradd -r -g nodejs nodejs && \
    chown -R nodejs:nodejs /app
USER nodejs

# Expose the port from config (default 3000)
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the server using tsx
CMD ["npm", "start"]
