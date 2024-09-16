echo "Swictching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* ubuntu@54.237.31.50:/var/www/54.237.31.50/

echo "done!"