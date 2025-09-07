#!/bin/bash
echo "Installing dependencies..."
npm ci

echo "Building with Vite..."
npx vite build

echo "Build completed!"
