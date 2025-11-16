import { GoogleGenerativeAI } from "@google/generative-ai";

export class GeminiProvider {
  constructor(config) {
    this.client = new GoogleGenerativeAI(config.apiKey);
    console.log("-------------------------------------------------");
    console.log("Initialized GeminiProvider with provided API key.", );
    console.log("-------------------------------------------------");
  }

  async generateCommitMessage(prompt) {
    const model = this.client.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  }
}
