#!/usr/bin/env node
import { spawn } from "child_process";
import process from "process";

const args = process.argv.slice(2);
const hasAIFlag = args.includes("-ai");

if (hasAIFlag) {
  const filteredArgs = args.filter(arg => arg !== "-ai");
  const child = spawn("gitpilot", ["commit", "--interactive", ...filteredArgs], { stdio: "inherit" });
  child.on("exit", process.exit);
} else {
  const child = spawn("git", args, { stdio: "inherit" });
  child.on("exit", process.exit);
}
