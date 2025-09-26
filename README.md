# Git Extensions

![Icon](images/icon.png)

**Git Extensions** is a Visual Studio Code extension that enhances the Git workflow inside the **Source Control panel**.  
Currently, it provides a convenient way to **compare two different files** directly from the Git changes view.

---

## ✨ Features

- **Select for Compare**: Right-click a file in the Git panel and mark it for comparison.  
- **Compare with Selected**: Choose another file and compare it with the previously selected file.  
- **DeSelect for Compare**: Cancel the selection if you change your mind.  
- Integrated into the **Source Control context menu** (no need to go through File Explorer).  
- Prevents comparing the same file by mistake.  

This functionality works with **changed, added, or deleted files** in Git.

---

## 📸 Demo

1. Right-click a file in the **Source Control panel** → `Select for Compare`.  
2. Right-click another file → `Compare with Selected`.  
3. The built-in VS Code **diff editor** opens, showing differences side by side.  
4. Use `DeSelect for Compare` if you want to reset your choice.  

---

## 🔧 Requirements

- VS Code **1.76.2 or higher**
- Git enabled in your workspace

---

## 🚀 Installation

1. Install from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/) (coming soon).  
2. Or install manually:
   - Download the `.vsix` file  
   - In VS Code, open the **Command Palette** (`Ctrl+Shift+P`)  
   - Run `Extensions: Install from VSIX...` and select the file  

---

## ⚙️ Extension Settings

No additional configuration is required.  

---

## 📌 Known Issues

- Only supports comparing **two files at a time**.  
- After a comparison, the selection resets automatically.  

---

## 🛠️ Contributing

Contributions are welcome!  
- Fork the repo on [GitHub](https://github.com/MohammadHammad1796/git-extensions)  
- Submit issues and PRs for new Git features (merge tools, stash helpers, etc.)  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📚 Release Notes

### 1.0.0
- Initial release
- Added support for comparing two files from the Git Source Control panel
