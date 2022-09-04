import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { withStyles } from "@mui/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styles, AppBar } from "./styles/PaletteFormNavStyles";

function PaletteFormNav(props) {
  const [formShowing, setForm] = useState(false);

  const handleClickOpen = () => {
    setForm(true);
  };

  const handleClosing = () => {
    setForm(false);
  };

  const {
    open,
    savePalette,
    handleChange,
    PaletteName,
    handleDrawerOpen,
    classes,
  } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="default" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuOpenIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          savePalette={savePalette}
          PaletteName={PaletteName}
          handleChange={handleChange}
          formShowing={formShowing}
          handleClosing={handleClosing}
        />
      )}
    </div>
  );
}

export default withStyles(styles)(PaletteFormNav);
