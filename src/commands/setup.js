import inquirer from "inquirer";
import { saveConfig } from "./config.js";

export async function setupCommand() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "provider",
      message: "Choose your AI provider:",
      choices: ["openai", "local"]
    },
    {
      type: "input",
      name: "apiKey",
      message: "Enter your OpenAI API key (leave blank for local models):",
      when: (answers) => answers.provider === "openai"
    }
  ]);

  saveConfig(answers);
  console.log(`\n✅ Configuration saved!`);
}
