import inquirer from "inquirer";
import { saveConfig } from "./config.js";

export async function setupCommand() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "provider",
      message: "Choose your AI provider:",
      choices: ["openai", "local", "gemini"]
    },
    {
      type: "input",
      name: "apiKey",
      message: "Enter your OpenAI/Gemini API key (leave blank for local models):",
      when: (answers) => answers.provider === "openai" || answers.provider === "gemini"
    },
    {
      type: "list",
      name: "defaultCommitStyle",
      message: "Choose your default commit message style:",
      choices: ["concise", "detailed", "custom"]
    }
  ]);

  saveConfig(answers);
  console.log(`\n✅ Configuration saved!`);
}
