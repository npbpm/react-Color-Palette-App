/* import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles"; */

/* const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    wifth: "100%",
    justifyContent: "space-between",
    color: "white",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
}; */

/* class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList); */

import React, { useState } from "react";
import MiniPalette from "./MiniPalette";
import { useNavigate, Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import blue from "@mui/material/colors/blue";
import red from "@mui/material/colors/red";

function PaletteList(props) {
  let navigate =
    useNavigate(); /* In the course they use history, but with react-router v6 we need to use the useNavigate hook */

  const [openDeleteDialog, setDeleteDialog] = useState(false);
  const [paletteToDelete, setPaletteToDelette] = useState("");

  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  const handleDelete = () => {
    removePalette(paletteToDelete);
    closeDialog();
  };

  const openDialog = (evt, id) => {
    evt.stopPropagation();
    setDeleteDialog(true);
    setPaletteToDelette(id);
  };

  const closeDialog = () => {
    setDeleteDialog(false);
  };

  const { palettes, classes, removePalette } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">CREATE PALETTE</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                key={palette.id}
                handleClick={goToPalette}
                handleDelete={openDialog}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDeleteDialog}
        aria-labelledby="delete-dialog-title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CancelIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
