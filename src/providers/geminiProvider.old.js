import { GoogleGenAI } from "@google/genai";

export class GeminiProvider {
  constructor(config) {
    this.client = new GoogleGenAI(config.apiKey);
    console.log("-------------------------------------------------");
    console.log("Initialized GeminiProvider with provided API key.", config.apiKey);
    console.log("-------------------------------------------------");
  }

  async generateCommitMessage(prompt) {
    const response = await this.client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    // const model = this.client.getGenerativeModel({ model: "gemini-pro" });
    // const result = await model.generateContent(prompt);
    return response.text;
  }
}
