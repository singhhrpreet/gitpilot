import { OpenAIProvider } from "./openaiProvider.js";
import { LocalProvider } from "./localProvider.js";
import { GeminiProvider } from "./geminiProvider.js";

export function getProvider(name, config) {
  switch (name) {
    case "openai":
      return new OpenAIProvider(config);
    case "gemini":
      return new GeminiProvider(config);
    case "local":
      return new LocalProvider(config);
    default:
      throw new Error(`Unknown provider: ${name}`);
  }
}
