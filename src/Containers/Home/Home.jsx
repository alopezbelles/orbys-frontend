import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import vector3 from "../../assets/vector3.png";
import vector4 from "../../assets/vector4.png";
import Button from "../../../src/Components/Button/Button";
import { Container, Box } from "@material-ui/core";


const Home = () => {

  const navigate = useNavigate();

  return (

    <Box width="100%" className="boxHome">
      {/* <h1>Home</h1> */}

      <img className="logoDesign" src={logo} alt="logo"></img>

      <div className="description">
        <p className="paragraph1">
          BOOK-ZONE is an online bookstore offering a wide selection of books in
          various languages and genres. From classic literature to the latest
          bestsellers, Book-zone has something for every reader. The platform
          features a user-friendly interface that allows users to search for,
          and browse books in a matter of minutes.
        </p>

        <div className="vectorBox">
          <img className="vectorDesign" src={vector1} alt="vector"></img>
          <img className="vectorDesign" src={vector2} alt="vector"></img>
          <img className="vectorDesign" src={vector3} alt="vector"></img>
          <img className="vectorDesign" src={vector4} alt="vector"></img>
        </div>
      </div>
      <div onClick={()=>navigate("/books")} className="buttonContainer">
        <h2 className="tittleStyle">¿Whant to see our books?</h2>
        <Button  text="Click me!" ></Button>
      </div>
    </Box>
  );
};

export default Home;
