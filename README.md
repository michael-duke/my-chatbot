# 🛰️ Friday Core

> "Protocol is the difference between a project and a legacy."

**Friday Core** is a specialized AI mentoring interface designed for software architects. Built on the modern **React 19 + Vite** stack, it provides high-fidelity technical guidance while maintaining a secure, modular structure.

## 🛠️ System Specifications

- **Kernel:** React 19 (Stable)
- **Interface:** Tailwind CSS v4
- **Logic Engine:** DeepSeek-V3 (Hugging Face Inference)
- **State Management:** Modern React Hooks & Context

## 🏗️ Architecture & Protocols

The project follows a modular "Guardian" architecture to ensure code quality:

### 🧩 Modular Components

- **`ChatInput`**: Manages the asynchronous pipeline and state for message transmission.
- **`ChatMessages`**: Handles the message list rendering and auto-scroll integration.
- **`ChatMessage`**: A presentation-layer component for distinct role rendering.

### ⚓ React 19 Logic

- **`useAutoScroll`**: A custom hook utilizing the latest `useRef` and `useEffect` patterns to manage the viewport without bloating the UI components.

### 🔐 Security & Operations

- **Environment Isolation**: Utilizes Vite's `import.meta.env` to isolate secrets.
- **Deployment**: Configured for **Netlify** with automatic CI/CD.

---

_Developed by Michael | Toronto, ON_
