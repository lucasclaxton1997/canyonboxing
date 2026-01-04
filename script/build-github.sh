#!/bin/bash

echo "Building for GitHub Pages..."

npm run build

echo "Adjusting asset paths for GitHub Pages (/canyonboxing/)..."

cd dist/public

sed -i 's|href="/assets/|href="/canyonboxing/assets/|g' index.html
sed -i 's|src="/assets/|src="/canyonboxing/assets/|g' index.html
sed -i 's|href="/favicon.png"|href="/canyonboxing/favicon.png"|g' index.html
sed -i 's|href="./favicon.png"|href="/canyonboxing/favicon.png"|g' index.html

sed -i 's|content="https://[^"]*opengraph.jpg"|content="https://lucasclaxton1997.github.io/canyonboxing/opengraph.jpg"|g' index.html

cp index.html 404.html

echo ""
echo "Build complete! Files are in dist/public/"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Copy the contents of dist/public/ to your GitHub repository"
echo "2. Enable GitHub Pages in your repository settings"
echo "3. Set the source to the root of the branch containing these files"
