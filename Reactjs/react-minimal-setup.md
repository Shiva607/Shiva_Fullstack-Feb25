# Getting Started with React Using the Minimal Template

## 📦 Command

```bash
npx create-react-app hello-react --template minimal
```

---

## 🧠 What This Command Does

| Part of Command      | Explanation                                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| `npx`                | A tool that runs Node.js packages without needing to install them globally.        |
| `create-react-app`   | A tool that sets up a new React.js application with sensible defaults.             |
| `hello-react`        | The name of the folder/project. The new app will be created inside this directory. |
| `--template minimal` | Specifies a minimal template with only the essential dependencies and files.       |

---

## 📁 What You Get with `--template minimal`

When you use the `minimal` template, it includes only the **bare minimum** to start a React app:

### 🔹 Folder Structure
```bash
hello-react/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   └── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
```

### 🔹 Minimal Dependencies in `package.json`
Only the core:
- `react`
- `react-dom`
- `react-scripts`

No extras like:
- ESLint
- Testing libraries
- Service Workers
- Web Vitals
- Extra files like `logo.svg`, `App.test.js`, etc.

---

## ✅ When to Use This

Use the `--template minimal` option if:
- You want full control and no clutter.
- You're an advanced user who prefers to add things manually.
- You're learning and want to understand React without distractions.

---

Would you like a sample `App.js` and `index.js` to go with this?