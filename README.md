# React Pagination & Debounce Demo

This project demonstrates two key UI functionalities in React:

1. **Pagination System** – A custom hook-powered pagination to navigate large datasets.
2. **Debounce Input** – A user input field with debouncing to reduce frequent state updates.


##  Features

###  Pagination Demo

- Dynamically paginate through a list of 123 items.
- Change items per page (5, 10, 25).
- Navigate with previous/next buttons and page numbers.
- Controlled input to jump to a specific page.

###  Debounce Input Demo

- Input field with adjustable debounce delay.
- Real-time display of current and debounced input values.

 ## Screenshot
 <img src="./src/assets/Screenshot 2025-06-26 212921.png" alt="Screenshot">

##  Technologies

- React (Functional Components + Hooks)
- Tailwind CSS for styling
- Custom Hooks:
  - `usePagination` – for pagination logic
  - `useDebounce` – for delaying input updates



## File Structure
```
src/
│
├── hooks/
│ ├── usePagination.js // Handles all pagination logic
│ └── useDebounce.js // Custom debounce implementation
│
├── components/
│ ├── PaginationDemo.jsx // Renders the paginated list
│ └── DebounceSearchDemo.jsx // Displays debounce input
│
├── App.jsx
└── index.js

```

## 🛠️ How to Run


1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/react-pagination-debounce-demo.git
   cd react-pagination-debounce-demo

    - npm install
    - npm run dev
    ```
