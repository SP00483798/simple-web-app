# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# Copy the rest of the app's code
COPY . .

# Install dependencies
RUN npm install

# Expose the app's port
EXPOSE 4000

# Run the app
CMD ["node", "app.js"]