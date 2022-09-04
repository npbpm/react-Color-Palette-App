import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { ValidatorForm } from "react-material-ui-form-validator";
import DraggableColorList from "./DraggableColorList";
import { arrayMoveImmutable } from "array-move";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import { withStyles } from "@mui/styles";
import { styles, Main, DrawerHeader } from "./styles/NewPaletteFormStyles";
import { DRAWER_WIDTH, MAX_COLORS } from "./constants";
import SeedColors from "./SeedColors";

const drawerWidth = DRAWER_WIDTH;

const maxColors = MAX_COLORS;

function NewPaletteForm(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [newColorName, setCurrentColor] = useState("blue");
  const [colors, setColors] = useState(SeedColors[0].colors);
  const [newName, setName] = useState("");
  const [PaletteName, setPaletteName] = useState("");

  const history = useNavigate();

  const { classes } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorChange = (color, evt) => {
    setCurrentColor(`${color.hex}`);
  };

  const addNewColor = () => {
    const newColor = { color: newColorName, name: newName };
    setColors([...colors, newColor]);
    setName("");
    setCurrentColor("#ffffff");
  };

  const handleChange = (evt) => {
    if (evt.target.name === "newColorName") {
      setName(evt.target.value);
    } else if (evt.target.name === "PaletteName") {
      setPaletteName(evt.target.value);
    }
  };

  const savePalette = (emoji) => {
    let newName = PaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: emoji,
    };
    props.savePalette(newPalette);
    history("/");
  };

  const removeColor = (evt, colorName) => {
    evt.stopPropagation();
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMoveImmutable(colors, oldIndex, newIndex));
  };

  const clearPalette = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = props.palettes.map((p) => p.colors).flat();
    do {
      var rand = Math.floor(Math.random() * allColors.length);
      var randomColor = allColors[rand];
    } while (colors.includes(randomColor));
    setColors([...colors, randomColor]);
  };

  useEffect(
    /* IT IS EQUAL TO A COMPONENTDIDMOUNT */
    () => {
      ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
        if (
          colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      ValidatorForm.addValidationRule("isColorUnique", (value) => {
        if (colors.every(({ color }) => color !== newColorName)) {
          return true;
        } else {
          return false;
        }
      });
      ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
        if (
          props.palettes.every(
            (palette) =>
              palette.paletteName.toLowerCase() !== value.toLowerCase()
          )
        ) {
          return true;
        } else {
          return false;
        }
      });
    }
  );

  return (
    <Box sx={{ display: "flex" }}>
      <PaletteFormNav
        open={open}
        savePalette={savePalette}
        handleChange={handleChange}
        PaletteName={PaletteName}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearPalette}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={colors.length === maxColors}
              className={classes.button}
              style={{
                backgroundColor: colors.length === maxColors && "grey",
              }}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            newColorName={newColorName}
            handleColorChange={handleColorChange}
            addNewColor={addNewColor}
            handleChange={handleChange}
            newName={newName}
            colors={colors}
          />
        </div>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={20}
        />
      </Main>
    </Box>
  );
}

export default withStyles(styles)(NewPaletteForm);
