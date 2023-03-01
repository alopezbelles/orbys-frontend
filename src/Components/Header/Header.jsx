import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import logoNavbar from '../../assets/logo.navbar.png';



const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
    <Toolbar className="toolbarDesign">
      <img className="logoNavbar" src={logoNavbar} alt="logo"></img>

    {/* <Typography className="logoNavbar" variant="h6" style={{ flexGrow: 1 }}>
      BOOK-ZONE
    </Typography> */}
    <Button onClick={()=>navigate("/")}>Home</Button>
    <Button onClick={()=>navigate("/books")}>Books</Button>
  </Toolbar>
</AppBar>

  );
};

export default Header;
