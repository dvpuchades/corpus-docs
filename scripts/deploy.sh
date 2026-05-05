#!/usr/bin/env bash
# Build a fresh image and replace the running container.
# Run from the repo root on the production server.

set -euo pipefail

IMAGE="corpus-site"
CONTAINER="corpus-site"
PORT="${PORT:-8080}"

echo "→ Pulling latest"
git pull --ff-only

echo "→ Building image $IMAGE"
docker build -t "$IMAGE" .

echo "→ Stopping previous container (if any)"
docker stop "$CONTAINER" 2>/dev/null || true
docker rm "$CONTAINER" 2>/dev/null || true

echo "→ Starting $CONTAINER on 127.0.0.1:$PORT"
docker run -d \
  --name "$CONTAINER" \
  --restart unless-stopped \
  -p "127.0.0.1:$PORT:80" \
  "$IMAGE"

echo "→ Done. Tail logs with: docker logs -f $CONTAINER"
