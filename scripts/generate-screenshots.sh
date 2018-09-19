#!/bin/sh

docker run --name rendition-screenshot -dit buildkite/puppeteer:v1.8.0
docker cp . rendition-screenshot:app
docker exec rendition-screenshot bin/bash -c "cd /app && npm ci && npm run ci:screenshot"
docker cp rendition-screenshot:/app/__screenshots__ .
docker stop rendition-screenshot
docker rm rendition-screenshot
