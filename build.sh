#!/bin/bash

echo "Installing dependencies..."
npm install

echo "Building the Next.js project..."
npm run build

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete!"