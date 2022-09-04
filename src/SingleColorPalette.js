import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { generatePalette } from "./ColorHelpers";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import { withStyles } from "@mui/styles";
import styles from "./styles/ColorPaletteStyles";

const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];

function SingleColorPalette(props) {
  const [StateFormat, setFormat] = useState("hex");

  const { classes } = props;

  const { paletteId, colorId } = useParams();
  let palette = generatePalette(findPalette(paletteId));

  function findPalette(id) {
    return props.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  function findColor(level, id) {
    return palette.colors[level].find(function (color) {
      return color.id === id;
    });
  }

  function getShades(id) {
    const shades = [];
    for (let level in levels) {
      shades.push(findColor(levels[level], id));
    }
    return shades;
  }

  function changeFormat(evt) {
    setFormat(evt.target.value);
  }

  const shades = getShades(colorId);

  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      color={color[StateFormat]}
      showingFullPalette={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        handleChange={changeFormat}
        format={StateFormat}
        showingAllColors={false}
      />
      <div className={classes.paletteColors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${paletteId}`}>Go Back</Link>
        </div>
      </div>
      ;
      <PaletteFooter
        paletteName={palette.paletteName}
        emoji={palette.emoji}
        showingFullPalette={false}
      />
    </div>
  );
}

export default withStyles(styles)(SingleColorPalette);
