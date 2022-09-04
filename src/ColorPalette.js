import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import { generatePalette } from "./ColorHelpers";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@mui/styles";
import styles from "./styles/ColorPaletteStyles";

function ColorPalette(props) {
  const [StateLevel, setLevel] = useState(500);

  const [StateFormat, setFormat] = useState("hex");

  function findPalette(id) {
    return props.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  function changeLevel(level) {
    setLevel(level);
  }

  function changeFormat(evt) {
    setFormat(evt.target.value);
  }

  let id = useParams().id;
  let palette = generatePalette(findPalette(id));

  const { colors, paletteName, emoji } = palette;
  const level = StateLevel;
  const format = StateFormat;
  const { classes } = props;

  let colorBoxes = colors[level].map((box) => (
    <ColorBox
      name={box.name}
      color={box[format]}
      key={box.id}
      id={box.id}
      paletteId={id}
      showingFullPalette={true}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        format={format}
        showingAllColors
      />
      <div className={classes.paletteColors}>{colorBoxes}</div>
      <PaletteFooter
        paletteName={paletteName}
        emoji={emoji}
        showingFullPalette={true}
      />
    </div>
  );
}

export default withStyles(styles)(ColorPalette);
