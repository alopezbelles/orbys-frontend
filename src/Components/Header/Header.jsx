import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import { AppBar, Toolbar, Button } from "@material-ui/core";
import logoNavbar from "../../assets/logo.navbar.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar className="toolbarDesign">
        <img className="logoNavbar" src={logoNavbar} alt="logo"></img>

        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/books")}>Books</Button>
        <Button onClick={() => navigate("/addbook")}>Add Book</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
