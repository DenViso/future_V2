import axios from "axios";
import fs from "fs";

const uaFile = "./src/langData/ua.json";
const enFile = "./src/langData/en.json";

// Ваш API ключ DeepL
const DEEPL_API_KEY = "your_deepl_api_key_here";

async function translateText(text, from = "UK", to = "EN") {
  try {
    const res = await axios.post(
      "https://api-free.deepl.com/v2/translate",
      new URLSearchParams({
        auth_key: DEEPL_API_KEY,
        text: text,
        source_lang: from.toUpperCase(),
        target_lang: to.toUpperCase(),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // Повертаємо перекладений текст
    return res.data.translations[0].text;
  } catch (err) {
    console.error("Translation error:", err.message);
    return text; // якщо помилка, повертаємо оригінал
  }
}

async function main() {
  const ua = JSON.parse(fs.readFileSync(uaFile, "utf8"));
  let en = {};
  if (fs.existsSync(enFile)) {
    en = JSON.parse(fs.readFileSync(enFile, "utf8"));
  }

  for (const key of Object.keys(ua)) {
    if (!en[key]) {
      console.log(`🔄 Translating: ${ua[key]}`);
      en[key] = await translateText(ua[key]);
    }
  }

  fs.writeFileSync(enFile, JSON.stringify(en, null, 2), "utf8");
  console.log("✅ Translation completed. File updated:", enFile);
}

main();
