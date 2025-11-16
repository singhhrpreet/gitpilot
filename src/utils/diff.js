import simpleGit from "simple-git";
const git = simpleGit();

export async function getStagedDiff() {
  const diff = await git.diff(["--cached"]);
  return diff || null;
}
