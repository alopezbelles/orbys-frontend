import React from "react";
import "./Books.css";
import Button from "../../../src/Components/Button/Button";
import { useNavigate } from "react-router-dom";

import BookTitles from "../../Components/BookTitles/BookList";

const Books = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="principalh1">These are our available books:</h1>
      <BookTitles />
      <div onClick={() => navigate("/")}>
        <Button text="Back to Home" />
      </div>
    </div>
  );
};

export default Books;
