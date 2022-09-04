import React, { memo } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@mui/icons-material/Delete";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, id, handleDelete, handleClick } =
    props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={() => handleClick(id)}>
      <DeleteIcon
        className={classes.deleteBtn}
        fontSize="medium"
        onClick={(evt) => handleDelete(evt, id)}
        style={{ transition: "all 0.3s ease-in-out" }}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.label === nextProps.label;
}

export default withStyles(styles)(memo(MiniPalette, arePropsEqual));
