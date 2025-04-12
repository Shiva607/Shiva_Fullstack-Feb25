## 🔥 `npm start` vs `npm run start`

Reference page: [Difference between `npm start` and `npm run start`?
](https://stackoverflow.com/questions/51358235/is-there-a-difference-between-npm-start-and-npm-run-start)

| Feature               | `npm start`           | `npm run start`        |
| --------------------- | --------------------- | ---------------------- |
| Shortcut?             | ✅ Yes                 | ❌ No                   |
| Needs script defined? | ❌ No (has fallback)   | ✅ Yes                  |
| Fallback behavior     | Runs `node server.js` | ❌ Shows error          |
| Common use            | Default entry point   | Explicit script runner |

---

## ✅ Default Shortcut Commands in npm

Only **4 scripts** have shortcuts — rest need `npm run`:

| Script Name | Shortcut Command |
| ----------- | ---------------- |
| `start`     | `npm start`      |
| `test`      | `npm test`       |
| `stop`      | `npm stop`       |
| `restart`   | `npm restart`    |

All other scripts (like `dev`, `build`, `lint`, `eject`) must be run like this:
```bash
npm run <script-name>
```

---

## 📁 Example `package.json`

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "dev": "vite"
}
```

| S.NO | Script Name | Run Command     | Shortcut Available? |
| ---- | ----------- | --------------- | ------------------- |
| 1    | start       | `npm start`     | ✅ Yes               |
| 2    | build       | `npm run build` | ❌ No                |
| 3    | test        | `npm test`      | ✅ Yes               |
| 4    | eject       | `npm run eject` | ❌ No                |
| 5    | dev         | `npm run dev`   | ❌ No                |

---

## 🧪 What If You Customize `"start"`?

You can totally change the `start` command to do **anything**:

```json
"scripts": {
  "start": "echo Custom start command!"
}
```

Then `npm start` will just print:

```
Custom start command!
```

So `"start"` is just a name — what it runs is completely up to **you**.