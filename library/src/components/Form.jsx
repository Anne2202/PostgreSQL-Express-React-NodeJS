import { useState } from "react";
import axios from "axios";


export default function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cover_url, setCover_url] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, author, description, category, cover_url, publishedAt, isActive);

    axios
    .post("http://localhost:3008/api/books", {title, author, description, category, cover_url, publishedAt, isActive})
    .then((response)=>{
        console.log(response.data);
    })
    .catch((err)=>console.log(err));
  };

  const handleAvailabilityChange = (e) => {
    setIsActive(e.target.value === 'available');
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Author..."
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Short description..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Book genre..."
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Url of book cover..."
          onChange={(e) => {
            setCover_url(e.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Published at..."
          onChange={(e) => {
            setPublishedAt(e.target.value);
          }}
        />
        <p>
          <label>
            <input type="radio" value="available" checked={isActive} name="availability" onChange={handleAvailabilityChange} />
            Available
          </label>
          <label>
            <input type="radio" value="unavailable" checked={!isActive} name="availability" onChange={handleAvailabilityChange} />
            Not available
          </label>
        </p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );

};
