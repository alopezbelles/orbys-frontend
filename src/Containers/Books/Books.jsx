import React from "react";
import "./Books.css";

import BookTitles from "../../Components/BookTitles/BookList";

const Books = () => {
  return (
    <div>
      <h1 className="principalh1">These are our available books:</h1>
      <BookTitles />
    </div>
  );
};

export default Books;
