# syntax=docker/dockerfile:1

# ---- Builder Stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (package.json and lock)
COPY package*.json ./
RUN npm ci --silent

# Copy the rest of the source code
COPY . .

# Build the Plasmo extension (produces the packaged extension in the build directory)
RUN npm run build

# ---- Runtime Stage (optional) ----
# The resulting image contains the built extension files.
# You can use this stage to serve the files with a simple web server if needed.
FROM alpine:latest AS runtime
WORKDIR /app
COPY --from=builder /app/build ./build
# By default, just keep the built artifacts. Adjust CMD as needed.
CMD ["sh"]
