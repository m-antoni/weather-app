# Stage 1: Build React app
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# install npm packages
RUN npm install

# Copy the rest of the source code
COPY . .


# Get the ENV
ARG REACT_APP_API_KEY
ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

# Build the React app (production build)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx config for React Router support
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]


########################################
# Deploy in render.com
########################################

# build image and inject env to build time note 
# docker build --build-arg REACT_APP_API_KEY=<API_KEY> -t <dockerhub-name>/<app-name>:latest .

# push the image to Docker Hub
# docker push <dockerhub-name>/<app-name>:latest