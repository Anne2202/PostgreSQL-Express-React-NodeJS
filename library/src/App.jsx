import Form from "./components/Form";
import BookList from "./components/BookList";
import Book from "./components/Book";
import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "pink" : "grey" })}
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              style={({ isActive }) => ({ color: isActive ? "pink" : "grey" })}
            >
              All Books
            </NavLink>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/books" element={<BookList />}></Route>
        <Route path="/books/:id" element={<Book />}></Route>
      </Routes>
    </>
  );
}

export default App;
