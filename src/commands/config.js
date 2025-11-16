import fs from "fs";
import path from "path";

const configPath = path.join(process.env.HOME || process.env.USERPROFILE, ".gitpilotrc");

export function saveConfig(config) {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

export function loadConfig() {
  if (!fs.existsSync(configPath)) return {};
  const raw = fs.readFileSync(configPath, "utf-8");
  return JSON.parse(raw);
}
