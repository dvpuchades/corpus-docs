// Generates /public/llms.txt and /public/llms-full.txt for both locales by
// reading src/content/docs/{en,es}/**/*.md. Runs before astro build.
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "src/content/docs");
const publicDir = path.join(root, "public");

const SITE = "https://corpus.dvpuchades.com";
const LOCALES = ["en", "es"];

const SECTION_ORDER = [
  "getting-started",
  "daily-use",
  "training",
  "health-signals",
  "privacy",
  "faq",
];

const HEADER = {
  en:
    "# Corpus\n\n" +
    "> The coach your Apple Watch was waiting for. Corpus reads your Apple Health data and turns it into a daily plan tuned to you — sleep, training, recovery, energy. No new hardware. No subscription.\n\n" +
    "Corpus is an iOS app that translates the data your iPhone and Apple Watch already collect into six clear daily metrics (sleep, readiness, strain, stress, recovery, steps) plus body composition, and writes a personalised weekly training plan that adapts to your recovery and your schedule. All raw biometrics stay on the device; only an anonymised structured summary is sent to generate coaching.\n",
  es:
    "# Corpus\n\n" +
    "> El entrenador que tu Apple Watch estaba esperando. Corpus lee tus datos de Apple Salud y los convierte en un plan diario hecho a tu medida: sueño, entrenamiento, recuperación y energía. Sin hardware adicional. Sin suscripción.\n\n" +
    "Corpus es una app de iOS que traduce los datos que tu iPhone y tu Apple Watch ya recogen en seis métricas diarias claras (sueño, readiness, esfuerzo, estrés, recuperación y pasos), más composición corporal, y escribe un plan semanal personalizado que se adapta a tu recuperación y tu agenda. Tus biométricos brutos se quedan en el dispositivo; solo se envía un resumen estructurado y anonimizado para generar el coaching.\n",
};

const TOP_LINKS = {
  en: [
    ["Home", "/en/"],
    ["Privacy policy", "/en/privacy"],
    ["Docs", "/en/docs"],
    ["Download (App Store)", "https://apps.apple.com/app/id6761331575"],
  ],
  es: [
    ["Inicio", "/es/"],
    ["Política de privacidad", "/es/privacy"],
    ["Docs", "/es/docs"],
    ["Descargar (App Store)", "https://apps.apple.com/app/id6761331575"],
  ],
};

async function walk(dir) {
  let out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(await walk(p));
    else if (e.isFile() && e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: {}, body: raw };
  const fm = {};
  for (const line of m[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (/^\d+$/.test(value)) value = Number(value);
    fm[key] = value;
  }
  return { fm, body: m[2] };
}

async function buildLocale(locale) {
  const dir = path.join(docsDir, locale);
  let files = [];
  try {
    files = await walk(dir);
  } catch {
    return; // no docs yet
  }

  const articles = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(file, "utf8");
      const { fm, body } = parseFrontmatter(raw);
      const rel = path.relative(dir, file).replace(/\\/g, "/").replace(/\.md$/, "");
      const slug = rel === "index" ? "" : rel;
      return {
        slug,
        url: `${SITE}/${locale}/docs${slug ? "/" + slug : ""}`,
        section: String(fm.section || "getting-started"),
        order: Number(fm.order ?? 99),
        title: String(fm.title || slug),
        summary: String(fm.summary || ""),
        body: body.trim(),
      };
    })
  );

  articles.sort((a, b) => {
    const sa = SECTION_ORDER.indexOf(a.section);
    const sb = SECTION_ORDER.indexOf(b.section);
    if (sa !== sb) return sa - sb;
    return a.order - b.order;
  });

  // llms.txt — index
  const lines = [];
  lines.push(HEADER[locale]);
  lines.push("## Key links\n");
  for (const [label, href] of TOP_LINKS[locale]) {
    lines.push(`- [${label}](${href.startsWith("http") ? href : SITE + href})`);
  }
  lines.push("");

  const grouped = new Map();
  for (const a of articles) {
    if (!grouped.has(a.section)) grouped.set(a.section, []);
    grouped.get(a.section).push(a);
  }

  const sectionLabel = {
    en: {
      "getting-started": "Getting started",
      "daily-use": "Daily use",
      training: "Training",
      "health-signals": "Health signals",
      privacy: "Privacy & control",
      faq: "FAQ",
    },
    es: {
      "getting-started": "Empezar",
      "daily-use": "Día a día",
      training: "Entrenamiento",
      "health-signals": "Señales de salud",
      privacy: "Privacidad y control",
      faq: "Preguntas frecuentes",
    },
  }[locale];

  for (const section of SECTION_ORDER) {
    const items = grouped.get(section);
    if (!items?.length) continue;
    lines.push(`## ${sectionLabel[section]}\n`);
    for (const a of items) {
      lines.push(`- [${a.title}](${a.url}): ${a.summary}`);
    }
    lines.push("");
  }

  const llmsTxt = lines.join("\n").trim() + "\n";

  // llms-full.txt — concatenated bodies
  const fullParts = [HEADER[locale], "\n---\n"];
  for (const section of SECTION_ORDER) {
    const items = grouped.get(section);
    if (!items?.length) continue;
    fullParts.push(`\n# ${sectionLabel[section]}\n`);
    for (const a of items) {
      fullParts.push(`\n## ${a.title}\n\nSource: ${a.url}\n\n${a.summary}\n\n${a.body}\n\n---\n`);
    }
  }
  const llmsFull = fullParts.join("").trim() + "\n";

  const targetDir = locale === "en" ? publicDir : path.join(publicDir, "es");
  await fs.mkdir(targetDir, { recursive: true });
  await fs.writeFile(path.join(targetDir, "llms.txt"), llmsTxt);
  await fs.writeFile(path.join(targetDir, "llms-full.txt"), llmsFull);

  console.log(`[llms] ${locale}: wrote ${articles.length} articles`);
}

async function main() {
  for (const l of LOCALES) await buildLocale(l);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
