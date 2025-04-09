# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json và cài dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ code
COPY . .

# Build ứng dụng
RUN npm run build

# Chạy ứng dụng
CMD ["npm", "start"]

# Expose port (mặc định Next.js là 3000)
EXPOSE 3000