import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function Book() {
  const [book, setBook] = useState([]);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3008/api/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {book && (
        <div>
          <h3>"{book.title}"</h3>
          <p>by {book.author}</p>
          <p>Genre: {book.category} | Published At: {book.publishedAt}</p>
          <img
            src={book.cover_url}
            alt=""
            style={{ width: "400px", height: "auto" }}
          />
          <p>{book.description}</p>
          <div>
            {book.isActive ? (
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMicMY_lYhjV_69LSmn0z-AGKbrvWG6OHAA&usqp=CAU"
                  alt="Available"
                  style={{ maxWidth: "15px" }}
                />
                <span> Available</span>
              </div>
            ) : (
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcQz7MqEBJexFsqhF3yWSsHM-bF1xpK65sg&usqp=CAU"
                  alt="Not Available"
                  style={{ maxWidth: "15px" }}
                />
                <span> Not Available</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}


        {/* //   {book.isactive && (
             <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMicMY_lYhjV_69LSmn0z-AGKbrvWG6OHAA&usqp=CAU" 
              alt="Available"
              style={{ maxWidth: "30px" }}
            >
            </img>
          )}
          <p>Available</p> */}

          {/* {book.map((book) => {

        return (
          <div key={book.id}>
            <h3>
              title: {book.title}
            </h3>
            <h3>
              author: {book.author}
            </h3>
            <p>genre: {book.category}</p>
            <img src={book.cover_url} alt="Book cover" />
          </div>
        );
      })} */}
      {/* <p>{book.isactive}</p> */}