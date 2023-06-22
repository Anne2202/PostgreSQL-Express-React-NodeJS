import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

export default function BookList() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3008/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  function deleteBtn (e, id){
    e.preventDefault();
    axios
      .delete(`http://localhost:3008/api/books/${id}`)
      .then((response)=>{
        setBooks(response.data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  return (
    <>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h2>
              {book.title}
            </h2>
            <h5>
              by {book.author}
            </h5>
            {/* <p>genre: {book.category}</p>
            <img src={book.cover_url} alt="Book cover" /> */}
            <button onClick={()=>{
                navigate(`/books/${book.id}`)
            }}>View more</button>
            <button onClick={(e)=>{
                deleteBtn(e, book.id);
            }}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
