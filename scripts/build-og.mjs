// Generates /public/og/{en,es}.png — 1200x630 OG cards.
// Same tokens as the live site (dark, accent purple, Inter).
// Re-renders on every build so copy/locale changes pick up automatically.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const TOKENS = {
  bgBase: "#000000",
  bgElev1: "#0E0E10",
  textPrimary: "#FFFFFF",
  textSecondary: "#A1A1A6",
  accent: "#BF5AF2",
  hairline: "#2C2C2E",
};

const COPY = {
  en: {
    eyebrow: "For iPhone & Apple Watch",
    headline: "The coach your Apple Watch was waiting for.",
    sub: "Free. Built for Apple Health. No subscription.",
    domain: "corpus.dvpuchades.com",
  },
  es: {
    eyebrow: "Para iPhone y Apple Watch",
    headline: "El entrenador que tu Apple Watch estaba esperando.",
    sub: "Gratis. Hecho para Apple Salud. Sin suscripción.",
    domain: "corpus.dvpuchades.com",
  },
};

// satori uses an object tree like React's createElement output.
// Every <div> needs an explicit display value, so flex() is the helper.
const flex = (style, ...children) => ({
  type: "div",
  props: {
    style: { display: "flex", ...style },
    children: children.length === 1 ? children[0] : children,
  },
});

const text = (style, value) => ({
  type: "div",
  props: {
    style: { display: "flex", ...style },
    children: value,
  },
});

const img = (src, width, height, style = {}) => ({
  type: "img",
  props: { src, width, height, style },
});

function card({ eyebrow, headline, sub, domain, iconDataUrl }) {
  return flex(
    {
      width: "1200px",
      height: "630px",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 80px",
      background: TOKENS.bgBase,
      backgroundImage:
        "radial-gradient(ellipse 700px 500px at 12% -5%, rgba(191,90,242,0.28), transparent 60%)," +
        "radial-gradient(ellipse 600px 400px at 110% 110%, rgba(48,209,88,0.10), transparent 55%)",
      color: TOKENS.textPrimary,
      fontFamily: "Inter",
    },
    // Top row: icon + eyebrow chip
    flex(
      { alignItems: "center", gap: "20px" },
      img(iconDataUrl, 96, 96, {
        borderRadius: "22px",
        border: `1px solid ${TOKENS.hairline}`,
      }),
      text(
        {
          alignItems: "center",
          padding: "10px 18px",
          borderRadius: "999px",
          background: TOKENS.bgElev1,
          border: `1px solid ${TOKENS.hairline}`,
          color: TOKENS.textSecondary,
          fontSize: "20px",
          fontWeight: 500,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        },
        eyebrow
      )
    ),
    // Headline + subhead
    flex(
      { flexDirection: "column" },
      text(
        {
          fontSize: "78px",
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          color: TOKENS.textPrimary,
          maxWidth: "1040px",
        },
        headline
      ),
      text(
        {
          marginTop: "28px",
          fontSize: "30px",
          fontWeight: 400,
          lineHeight: 1.35,
          color: TOKENS.textSecondary,
          maxWidth: "900px",
        },
        sub
      )
    ),
    // Footer: brand + domain
    flex(
      {
        alignItems: "center",
        justifyContent: "space-between",
        color: TOKENS.textSecondary,
        fontSize: "22px",
      },
      flex(
        { alignItems: "center", gap: "10px" },
        flex({
          width: "10px",
          height: "10px",
          borderRadius: "999px",
          background: TOKENS.accent,
        }),
        text({ color: TOKENS.textPrimary, fontWeight: 600 }, "Corpus")
      ),
      text({}, domain)
    )
  );
}

async function main() {
  const [interRegular, interSemiBold, iconBuf] = await Promise.all([
    fs.readFile(path.join(root, "assets/fonts/Inter-Regular.ttf")),
    fs.readFile(path.join(root, "assets/fonts/Inter-SemiBold.ttf")),
    fs.readFile(path.join(root, "public/images/icon/icon-128.png")),
  ]);

  const iconDataUrl = `data:image/png;base64,${iconBuf.toString("base64")}`;

  const fonts = [
    { name: "Inter", data: interRegular, weight: 400, style: "normal" },
    { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
  ];

  const outDir = path.join(root, "public/og");
  await fs.mkdir(outDir, { recursive: true });

  for (const locale of ["en", "es"]) {
    const tree = card({ ...COPY[locale], iconDataUrl });
    const svg = await satori(tree, { width: 1200, height: 630, fonts });
    const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
      .render()
      .asPng();
    const outPath = path.join(outDir, `${locale}.png`);
    await fs.writeFile(outPath, png);
    console.log(`[og] wrote ${path.relative(root, outPath)} (${png.length} bytes)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
