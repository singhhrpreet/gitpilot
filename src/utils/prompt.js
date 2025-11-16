export function promptTemplate(diff) {
  return `Generate a concise, clear git commit message for the following diff:\n\n${diff}`;
}
