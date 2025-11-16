import { OpenAIProvider } from "./openaiProvider.js";
import { LocalProvider } from "./localProvider.js";

export function getProvider(name, config) {
  switch (name) {
    case "openai":
      return new OpenAIProvider(config);
    case "local":
      return new LocalProvider(config);
    default:
      throw new Error(`Unknown provider: ${name}`);
  }
}
