
# 🗺️ Angelswing Frontend Assignment

## 🚀 Features

- ♿ **Accessibility-first Approach**
  - Seamless **keyboard navigation** using `Tab`, `Enter`, and arrow keys.
- 🕹️ **Real-time Map Settings**
  - Updates like position and zoom are instantly reflected on the map.
- 📱 **Mobile Responsive**
  - Adaptive layout for smartphones, tablets, and desktops.
- 🧪 **Testing with Vitest**
  - Key components and logic covered with unit tests.
- 🔒 **Pre-commit Test and Lint Checks**
  - Enforced with **Husky** and **lint-staged**.

---

## 🧰 Tech Stack

- **React** (with functional components and hooks)
- **OpenLayers** (web mapping library)
- **Vitest** (unit testing)
- **TypeScript** 
- **Styled Components** *(for styling)*
- **Husky** + **lint-staged** (for Git hook-based test)

---

## 🏁 Getting Started

### 1. Clone the repository

```bash
git https://github.com/angelswing-recruit/iamsujanstha-20250418.git
cd iamsujanstha-20250418
git checkout feat/angelswing
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

### 4. Run tests

```bash
pnpm test
pnpm test:watch (watch mode)
```

---

## ✅ Pre-commit Hook (Husky + lint-staged)
To maintain code quality and reliability, this project uses Husky and lint-staged to run tests cases before each commit.

## ♿ Accessibility Details

Accessibility is a key focus of this project, follows WCAG guidelines.

- ✅ All interactive elements are keyboard navigable using `Tab`, `Shift+Tab`, and `Enter`.
- ✅ Proper `tabindex`, `aria-label`, and semantic HTML used.
- ✅ Logical tab order maintained.
- ✅ Visual focus indicators present for clarity.
- ✅ Screen reader support for important regions of the UI.

---

## 📱 Mobile Responsiveness

The layout is fully responsive and adjusts gracefully on smaller screens:

- 🧭 Map scales fluidly on different screen sizes.
- 🎛️ Controls and menus are touch-friendly.
- 🪟 Tested on various breakpoints for layout consistency.

---

## 🔄 Real-time Settings Reflection

User interactions reflect immediately on the map:

- 🔄 Changes in zoom, position, and other settings sync live.
- ⏱️ No need for page refresh or reloading the map.
- 📡 Ideal for applications requiring dynamic geolocation updates.

---

## 🧪 Testing with Vitest

This project uses **Vitest** to write unit tests for core components and hooks.

### Tested Features:

- Map initialization and rendering
- Map location updates
- Component rendering behavior

### Sample command:

```bash
pnpm test
```

---

## 🙌 Acknowledgements

- [OpenLayers](https://openlayers.org/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Vitest](https://vitest.dev/)