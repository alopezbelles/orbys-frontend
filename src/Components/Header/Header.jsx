import React from "react";
import "./Header.css";

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


const Header = () => {
  return (
    <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" style={{ flexGrow: 1 }}>
      Mi sitio web
    </Typography>
    <Button color="inherit">Inicio</Button>
    <Button color="inherit">Acerca de</Button>
    <Button color="inherit">Contacto</Button>
  </Toolbar>
</AppBar>

  );
};

export default Header;
