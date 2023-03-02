import React from "react";
import "./BookDetail.css";
import { useNavigate } from "react-router-dom";
import booksData from "../../assets/books.json";
import BookInfo from "./BookInfo";
import Button from "../../../src/Components/Button/Button";

const BookDetail = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div className="bookDetailDesign">
      {/* TODO: Hacer que el componente se renderice en función de la posición del array del archivo JSON.  */}
      <BookInfo book={booksData[1]} />
      <div onClick={() => navigate("/books")}>
        <Button text="Back to list"></Button>
      </div>
    </div>
  );
};

export default BookDetail;
