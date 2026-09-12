# 🧱 Dev Stack — Development Stack Builder

Dev Stack Builder is a responsive website built with React, JavaScript ES6+, CSS3, JSON, React-Toastify, and Vite.

The main purpose of this project is to let users explore different development technologies and create their own technology stack. Users can view technology details, add technologies to their stack, remove them, and manage their selected technologies easily.

This project was created as part of the Programming Hero A-5 Dev Stack Builder Website assignment.

## ✨ Features

- 🔍 **Explore Technologies** – View technologies with their category, rating, difficulty, and description.
- 🧱 **Build Your Stack** – Add your favorite technologies to a personal stack.
- 🚫 **Duplicate Prevention** – Prevents adding the same technology twice.
- 🗑️ **Remove Technologies** – Remove individual items or clear the entire stack.
- 🔔 **Toast Notifications** – Get instant feedback for stack actions.
- 📱 **Responsive Design** – Works smoothly on mobile, tablet, and desktop.
- 📄 **JSON Data** – Technology information is loaded dynamically from a JSON file.
- ⏳ **Loading State** – Shows a loading message while technology data is being fetched.

## 🛠️ Technologies Used

- React.js
- JavaScript ES6+
- CSS3
- JSON
- React-Toastify
- Vite

## 🚀 Run Locally
First, clone the repository:
git clone https://github.com/jotika-meaw/devstack-assignment.git

Go to the project folder: cd devstack-assignment

Install the required packages: npm install

Start the development server: npm run dev

Then open the local URL shown in the terminal.

Usually, Vite runs the project at: 
http://localhost:5173/

## 📁 Project Structure

devstack-assignment/
│
├── node_modules/
│
├── public/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   ├── hamburger.png
│   │   ├── logo-text.png
│   │   ├── YourStack-with.png
│   │   └── YourStack-without.png
│   │
│   └── data/
│       └── technologies.json
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── StackPanel.jsx
│   │   └── TechnologyCard.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md


## 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

### 2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` is used to create and update state in a React component. I used it to manage the technologies added to the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` is used to perform side effects in a React component. I used it to fetch the technology data from the JSON file when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify each item in a list. It helps React update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different content based on a condition. I used it in the Your Stack section to show an empty message when no technology has been selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent can pass data to a child using props. A child can send information back by calling a function passed from the parent as a prop. In this project, `TechnologyCard` receives `technology` and `onAdd`, then calls `onAdd(technology)` when its button is clicked.


## 🌐 Submission

**Dev Stack Builder Live Website** : https://devstack-assignment.vercel.app/

**📂 GitHub Repository** : https://github.com/jotika-meaw/devstack-assignment
