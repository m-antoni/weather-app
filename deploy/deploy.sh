#!/bin/bash

echo "***********************************"
echo "Navigate to deploy folder"
echo "***********************************"

cd ~/deploy || exit 1

echo "***********************************"
echo "Stop the application"
echo "***********************************"

docker compose down

echo "***********************************"
echo "Remove unused docker images"
echo "***********************************"

docker image prune -a -f

echo "***********************************"
echo "Start the application"
echo "***********************************"

docker compose pull
docker compose up -d

echo "***********************************"
echo "Application is now running!"
echo "***********************************"