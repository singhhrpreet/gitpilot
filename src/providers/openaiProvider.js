import OpenAI from "openai";

export class OpenAIProvider {
  constructor(config) {
    this.client = new OpenAI({ apiKey: config.apiKey });
  }

  async generateCommitMessage(prompt) {
    const completion = await this.client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0
    });
    return completion.choices[0].message.content.trim();
  }
}
