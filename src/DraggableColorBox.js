import React from "react";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";
import { IconButton } from "@mui/material";
import styles from "./styles/DraggableColorBoxStyles";

function DraggableColorBox(props) {
  const { classes, handleClick, name, color } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <IconButton onClick={(evt) => handleClick(evt, name)}>
          <DeleteIcon className={classes.deleteIcon} />
        </IconButton>
      </div>
    </div>
  );
}

export default withStyles(styles)(SortableElement(DraggableColorBox));
