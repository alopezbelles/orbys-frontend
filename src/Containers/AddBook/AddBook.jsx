import Button from "../../../src/Components/Button/Button";
import React from "react";
import logo from "../../assets/logo.png";
import "./AddBook.css";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  return (
    <div className="addBookDesign">
      <img className="logoDesignAdd" src={logo} alt="logo"></img>

      <h1 className="principalh1">Want to add a book?</h1>
      <form className="formBox">
        <input
          className="inputDesign"
          type="text"
          placeholder="  Isbn ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Title ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Subtitle ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Author ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Publisher ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Published ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Pages ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Description ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Website ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Category ... "
        ></input>
        <br />
      </form>
      <div onClick={() => navigate("/books")}>
        <Button text="Add book!"></Button>
      </div>
    </div>
  );
};

export default AddBook;
