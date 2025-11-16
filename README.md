# GitPilot 🚇

**AI-powered Git commit assistant** — generate meaningful, concise commit messages effortlessly. Designed to **fit seamlessly into your workflow** while keeping you productive and in control.

---

## 🚀 Features

* Generate commit messages with AI (OpenAI by default)
* Supports **local LLMs** (Ollama, LLaMA, etc.)
* Interactive mode: approve or edit AI-generated messages
* Optional **Git wrapper mode** (`git commit -ai`)
* Minimal setup: works out-of-the-box with `gitpilot setup`
* Configurable via **`~/.gitpilotrc`** or environment variables

---

## ⚡ Quick Start

### 1. Install GitPilot globally

```bash
npm install -g @hpreet/git-pilot
```

### 2. Setup your AI provider

```bash
gitpilot setup
```

* Follow the prompts:

  * Choose provider (OpenAI or local LLM)
  * Enter your API key if needed
* This creates your `~/.gitpilotrc` with defaults

### 3. Stage your changes

```bash
git add .
```

### 4. Generate a commit message automatically

```bash
gitpilot commit
```

* The AI will suggest a commit message
* You can approve or edit it (interactive mode)

### 5. Optional: provide your own message

```bash
gitpilot commit -m "Your commit message here"
```

### 6. Advanced: Git wrapper mode

```bash
git commit -ai
```

* Uses GitPilot as a drop-in replacement for `git commit`
* Only enable if you’re comfortable replacing Git binary

---

## ⚙ Configuration

GitPilot stores user preferences in:

```
~/.gitpilotrc
```

Example:

```json
{
  "provider": "openai",
  "apiKey": "YOUR_API_KEY_HERE",
  "defaultCommitStyle": "concise"
}
```

You can override settings using environment variables:

```bash
export GITPILOT_API_KEY="YOUR_API_KEY"
```

---

## 🧉 Supported Providers

* **OpenAI** (default)
* **Local LLMs** (stub included; future support for Claude, GPT-4 local models)

---

## 📖 Contribution

GitPilot is open source!

* Report issues, suggest features, or contribute via PRs
* Code style: ESLint + Prettier
* Follow standard Git workflow: `git clone`, `npm install`, `npm link`

---

## 🌟 License

MIT © Harpreet Singh

---

## 💬 Contact

* GitHub: [https://github.com/singhhrpreet/git-pilot](https://github.com/singhhrpreet/git-pilot)
* Email: [thesinghharpreet@gmail.com](mailto:thesinghharpreet@example.com)
