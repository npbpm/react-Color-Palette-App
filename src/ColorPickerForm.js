import React from "react";
import { Button } from "@mui/material";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@mui/styles";
import styles from "./styles/ColorPickerFormStyles";
import { MAX_COLORS } from "./constants";

const maxColors = MAX_COLORS;

function ColorPickerForm(props) {
  const {
    newColorName,
    handleColorChange,
    addNewColor,
    handleChange,
    newName,
    colors,
    classes,
  } = props;

  return (
    <div style={{ width: "90%" }}>
      <ChromePicker
        color={newColorName}
        onChange={handleColorChange}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={addNewColor} style={{ width: "100%" }}>
        <TextValidator
          value={newName}
          name="newColorName"
          onChange={handleChange}
          variant="filled"
          className={classes.colorNameInput}
          margin="normal"
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "This field is required",
            "Color name must be unique",
            "Colors must be unique",
          ]}
          placeholder="Color Name"
        />
        <Button
          className={classes.addColor}
          type="submit"
          variant="contained"
          color="primary"
          style={{
            backgroundColor:
              colors.length === maxColors ? "grey" : `${newColorName}`,
          }}
          disabled={colors.length === maxColors}
        >
          {colors.length === maxColors ? "Palette is Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default withStyles(styles)(ColorPickerForm);
