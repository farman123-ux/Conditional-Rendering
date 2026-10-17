# React Learn — Conditional Rendering

A modern, responsive, beginner-friendly educational website that teaches **Conditional Rendering in React.js**.

## 🚀 Features

- **Sticky Navigation Bar**: With brand logo, subtitle, navigation links (`Home`, `Learn`, `Examples`, `About`), responsive mobile hamburger menu, and real-time live search that filters concepts, methods, and examples.
- **Interactive Hero Section**: Features clear definitions, technology badges, and an interactive conditional logic diagram (`Condition → True / False → UI Output`) with a live toggle switch.
- **What Is Conditional Rendering?**: Plain-English definition, simple explanation, real-life analogy, standard code snippet, line-by-line breakdown, and expected output comparison with live preview.
- **How Conditional Rendering Works**: 4-step workflow cards + visual flow diagram (`Condition → Evaluate → Render UI`).
- **4 Conditional Rendering Methods**:
  1. `if/else Statement` (Early return pattern)
  2. `Ternary Operator (? :)` (Inline JSX decisions)
  3. `Logical AND (&&)` (One-way condition)
  4. `State-Driven Rendering (useState)` (Dynamic user interactions)
  - Each card includes interactive mini-playgrounds and expandable explanations.
- **Interactive Practical Examples**:
  1. **Login and Logout**: Toggle between member dashboard and guest login with live state reflection.
  2. **Show and Hide Password**: Toggle input type (`password` ↔ `text`) and Lucide eye icons.
  3. **Loading and Data Display**: Simulate asynchronous network requests with loading spinner and profile card render.
- **Reusable Example Details Pages (`/examples/:id`)**:
  - Full source code with copy buttons and syntax highlighting.
  - Line-by-line explanations.
  - Expected output summaries.
  - Working interactive live sandbox.
  - "Back to Examples" navigation.
- **Hooks, Props, and Routes**: Concise explanations of `useState`, component props, and client-side routing.
- **Common Mistakes to Avoid**: 5 side-by-side comparisons of buggy code vs correct code (`=` vs `===`, missing returns, `0 && <Item />`, state mutations, and prop immutability).
- **Responsive & Accessible**: Styled using Tailwind CSS with clean developer aesthetics, accessible contrast, and visible keyboard focus states.

## 🛠️ Technology Stack

- **React 19**
- **JavaScript (ES6+)**
- **Tailwind CSS v4**
- **React Router DOM v7**
- **Lucide React Icons**
- **Vite**

## 📦 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Run linter
```bash
npm run lint
```
