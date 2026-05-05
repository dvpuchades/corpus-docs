# corpus-docs

Marketing + docs site for **Corpus** — `https://corpus.dvpuchades.com`.
Astro static output, served by Caddy in a Docker container behind a Cloudflare Tunnel.

## Deploy on the Raspberry Pi

The Dockerfile is multi-arch (Node + Caddy alpine images both have arm64), so `docker build` works directly on the Pi.

```sh
git pull
./scripts/deploy.sh
```

`deploy.sh` builds the image, stops the old container, and starts a new one on `127.0.0.1:8080`. That's the port Cloudflare Tunnel should point at.

### cloudflared

If the tunnel isn't set up yet:

```sh
cloudflared tunnel login
cloudflared tunnel create corpus-site
cloudflared tunnel route dns corpus-site corpus.dvpuchades.com
```

Then in `~/.cloudflared/config.yml`:

```yaml
tunnel: corpus-site
credentials-file: /home/<user>/.cloudflared/<tunnel-id>.json

ingress:
  - hostname: corpus.dvpuchades.com
    service: http://localhost:8080
  - service: http_status:404
```

Run as a service:

```sh
sudo cloudflared service install
sudo systemctl restart cloudflared
```

After deploys, just rerun `./scripts/deploy.sh`. No need to touch cloudflared again.

## Local development

```sh
npm install
npm run dev      # http://127.0.0.1:4321
npm run build    # outputs to dist/
```

`npm run build` regenerates `public/og/{en,es}.png` (satori) and `public/llms.txt` (per locale) before running `astro build`.

## Editing content

- Docs articles: `src/content/docs/{en,es}/<section>/<slug>.md` — frontmatter schema in `src/content/config.ts`. Sidebar and `llms.txt` pick up new files automatically.
- Privacy policy: `src/content/privacy/{en,es}.md`.
- OG card copy/layout: top of `scripts/build-og.mjs`.

## Contact

`dvpuchades@gmail.com`
