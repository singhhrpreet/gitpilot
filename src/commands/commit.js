import { getProvider } from "../providers/index.js";
import { getStagedDiff } from "../utils/diff.js";
import { promptTemplate } from "../utils/prompt.js";
import simpleGit from "simple-git";
import inquirer from "inquirer";
import { loadConfig } from "./config.js";

const git = simpleGit();

export async function commitCommand(options) {
  const diff = await getStagedDiff();
  if (!diff) {
    console.log("No staged changes.");
    return;
  }

  const config = loadConfig();
  const provider = getProvider(config.provider || "openai", config);

  let message = options.message || await provider.generateCommitMessage(promptTemplate(diff));

  if (options.interactive) {
    const { approvedMessage } = await inquirer.prompt([{
      type: "editor",
      name: "approvedMessage",
      message: "Edit or approve commit message:",
      default: message
    }]);
    message = approvedMessage;
  }

  await git.commit(message);
  console.log("\n✅ Commit created:");
  console.log(message);
}
