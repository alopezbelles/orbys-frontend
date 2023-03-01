
import React from "react";
import "./BookInfo.css";
import Cover from "../../assets/cover.jpg"


function BookInfo({ book }) {
    return (
      <div className="info">
        <h2>{book.title}</h2>
        <img className="coverDesign" src={Cover} alt="cover"></img>
        <h3>{book.subtitle}</h3>
        <p>Author: {book.author}</p>
        <p>{book.description}</p>
        <p>{book.pages}</p>
        <p>{book.category}</p>
        {/* <p>Website: {book.website}</p> */}
      </div>
    );
  }

  export default BookInfo;