#!/usr/bin/env node
import { Command } from "commander";
import { commitCommand } from "../src/commands/commit.js";
import { setupCommand } from "../src/commands/setup.js";

const program = new Command();

program
  .name("gitpilot")
  .description("Your AI copilot for git commits")
  .version("0.1.0");

program
  .command("commit")
  .description("Generate a commit message with AI")
  .option("-m, --message <message>", "Provide your own commit message")
  .option("--interactive", "Approve/edit message before committing")
  .action(commitCommand);

program
  .command("setup")
  .description("Configure your API provider and keys")
  .action(setupCommand);

program.parse(process.argv);
