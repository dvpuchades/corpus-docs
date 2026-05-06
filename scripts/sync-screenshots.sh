#!/usr/bin/env bash
# Sync raw screenshots from images/screenshots/ into public/images/screenshots/
# and run pngquant on the PNGs in place. Lossy-perceptual quantization keeps
# resolution at the source 1179×2556 and drops file size by ~70–85% with no
# perceptible quality loss for UI screenshots.
#
# Run after dropping new screenshots into images/screenshots/{en,es}/, then
# `npm run build`.
#
# Requires pngquant: `brew install pngquant` (or apt-get install pngquant on Linux).

set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v pngquant >/dev/null 2>&1; then
  echo "✖ pngquant not found — install with: brew install pngquant"
  exit 1
fi

SRC="images/screenshots"
DST="public/images/screenshots"

echo "→ Syncing $SRC → $DST"
rm -rf "$DST"
mkdir -p "$DST"
cp -R "$SRC/." "$DST/"

echo "→ Optimising PNGs in place"
find "$DST" -type f -name '*.PNG' -print0 | while IFS= read -r -d '' f; do
  before=$(wc -c < "$f")
  pngquant --quality=80-95 --speed 1 --strip --force --output "$f" "$f"
  after=$(wc -c < "$f")
  pct=$(( 100 - (after * 100 / before) ))
  printf "  %-60s %dK → %dK  (-%d%%)\n" "${f#$DST/}" "$((before / 1024))" "$((after / 1024))" "$pct"
done

echo "✓ Done. Run \`npm run build\` to publish."
