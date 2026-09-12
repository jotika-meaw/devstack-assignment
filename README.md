# 🧱 Dev Stack — Development Stack Builder

Dev Stack is a responsive React website that helps developers explore technologies and build a personal development stack. It follows the provided Dev Stack assignment UI and requirements, including the technology JSON, stack selection, responsive navigation, loading state, and React-Toastify feedback.

## ✨ Features

- **Technology explorer:** 12 technologies are loaded from a JSON file and displayed in responsive cards.
- **Stack builder:** Add technologies, prevent duplicates, remove individual items, or clear the complete stack.
- **Responsive UI:** Sticky desktop navigation, mobile hamburger navigation, responsive cards, hero, stack panel, and footer.

## 🛠️ Technologies Used

- React.js
- JavaScript ES6+
- CSS3
- JSON
- React-Toastify
- Vite

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

For a production build:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```text
DevStack/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── StackPanel.jsx
│   │   └── TechnologyCard.jsx
│   ├── data/
│   │   └── technologies.json
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses it to make component UI easier to read and build.

### 2. What is the difference between props and state?
Props are values passed from a parent to a child component. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` creates component state and gives a function to update it. This project uses it for the selected stack, loading state, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after rendering. It is used here to fetch the local JSON data after the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify each item so it can update the list efficiently when items change.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. The stack panel shows `Your stack is empty.` when the stack has no selected technologies; otherwise it shows the selected items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data or functions through props. A child can call a function received as a prop to send an action or value back to the parent. In this project, `TechnologyCard` receives `technology` and `onAdd`, then calls `onAdd(technology)` when its button is clicked.

## 📌 Assignment Checklist

- [x] Sticky desktop navbar
- [x] Mobile hamburger navbar
- [x] Hero heading, description, buttons, and provided hero image
- [x] 10–15 technology records in JSON
- [x] JSON loaded with `useEffect`
- [x] Loading spinner/message
- [x] Responsive 3/2/1-column technology grid
- [x] Technology cards with icon, badge, name, description, category, difficulty, rating, and button
- [x] Your Stack sidebar
- [x] Duplicate prevention with warning toast
- [x] Added button state
- [x] Individual remove
- [x] Remove All
- [x] React-Toastify notifications for add, duplicate, remove, and remove all
- [x] Shared orange → pink → violet gradient variable
- [x] Footer with brand, social links, Product, Company, Legal, Privacy, and Terms
- [x] Responsive mobile/tablet/desktop layout
- [x] README with project information and React answers

## 🌐 Submission

GitHub Repository Link: _Add your repository URL here_

Live Site Link: _Add your deployed site URL here_
