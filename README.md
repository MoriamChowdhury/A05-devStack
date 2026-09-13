# 🧱 Dev Stack

Dev Stack is a small web app that helps developers choose technologies for their projects. It displays different frontend, backend, database, programming language, styling, and DevOps technologies as cards. Users can select the technologies they like and add them to their personal "Your Stack" panel to easily view and compare their choices.

###Live link:https://capable-profiterole-942ed5.netlify.app/

## 🛠️ Technology Used
- React 18 — component-based UI
- TypeScript — static typing across components and data
- Tailwind CSS — utility-first styling and the shared brand gradient
- React-Toastify — toast notifications for stack actions
- Vite — dev server and build tool
- JSON — local technology dataset, loaded at runtime with fetch

## ✨ Features

1. **Build Your Stack** — Users can choose any technology and add it to their own stack. If they try to add the same technology again, a warning sign is shown.

2. **Loading Data** — The technology list is loaded from a `technologies.json` file when the page starts. A loading spinner is shown while the data is loading.

3. **Responsive Design** — The website works well on different screen sizes. It has a sticky navbar, a mobile menu, and a responsive card layout. The same gradient color is used throughout the website for a consistent look.


## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React code easier to read and helps us describe what the UI should look like.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and update data that can change in a component. I used it to store and update the data needed for the UI, such as the current state of the application.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs some code after the component renders. I used it to fetch the JSON data from the API when the component loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React understand which item was added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something only when a certain condition is true.

For example, I used it to show an empty stack message when there are no items:

```jsx
{stack.length === 0 && <p>Your stack is empty.</p>}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

```jsx
<Child name="Moriam" />
```

The child can send something back by calling a **function passed through props** by the parent.

```jsx
<Child onChange={handleChange} />
```

Here, the child can call `onChange()` to send information back to the parent.
