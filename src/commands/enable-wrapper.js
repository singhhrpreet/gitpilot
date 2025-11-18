#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import os from 'os';

export function enableWrapper() {
    const HOME = os.homedir();
    const BIN_DIR = path.join(HOME, 'bin');

    // 1. Ensure ~/bin exists
    if (!fs.existsSync(BIN_DIR)) {
        fs.mkdirSync(BIN_DIR, { recursive: true });
        console.log(`Created ${BIN_DIR}`);
    }

    // 2. Write git wrapper script
    const wrapperPath = path.join(BIN_DIR, 'git');

    // Detect platform for wrapper script shebang
    const isWindows = process.platform === 'win32';
    const wrapperScript = isWindows
        ? `#!/usr/bin/env bash
ORIGINAL_GIT="$(which git)"
if [[ "$1" == "commit" && "$2" == "-ai" ]]; then
    gitpilot commit
else
    "$ORIGINAL_GIT" "$@"
fi`
        : `#!/usr/bin/env bash
ORIGINAL_GIT="$(which git)"
if [[ "$1" == "commit" && "$2" == "-ai" ]]; then
    gitpilot commit
else
    "$ORIGINAL_GIT" "$@"
fi`;

    fs.writeFileSync(wrapperPath, wrapperScript, { mode: 0o755 });
    console.log(`Installed git wrapper at ${wrapperPath}`);

    // 3. Detect shell rc file
    let shellRc;
    const userShell = process.env.SHELL || '';
    if (isWindows) {
        // Git Bash / WSL
        shellRc = path.join(HOME, '.bashrc');
        console.log(`Using ${shellRc} for PATH configuration (Git Bash/WSL)`);
    } else if (userShell.includes('zsh')) {
        shellRc = path.join(HOME, '.zshrc');
    } else if (userShell.includes('bash')) {
        shellRc = path.join(HOME, '.bashrc');
    } else {
        shellRc = path.join(HOME, '.profile'); // fallback
    }

    // 4. Add ~/bin to PATH if not already present
    const pathLine = `export PATH="$HOME/bin:$PATH"`;
    const rcContent = fs.existsSync(shellRc) ? fs.readFileSync(shellRc, 'utf-8') : '';
    if (!rcContent.includes(pathLine)) {
        fs.appendFileSync(shellRc, `\n# Added by GitPilot enable-wrapper\n${pathLine}\n`);
        console.log(`Added ~/bin to PATH in ${shellRc}`);
    } else {
        console.log(`~/bin is already in PATH in ${shellRc}`);
    }

    console.log(`\n✅ GitPilot wrapper enabled!`);
    console.log(`Please restart your terminal or run:`);
    console.log(`source ${shellRc}`);
}
