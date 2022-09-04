import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

export default function PaletteMetaForm(props) {
  const { savePalette, PaletteName, handleChange, formShowing, handleClosing } =
    props;

  const [stage, setStage] = useState("set name");

  const handleClose = () => {
    handleClosing();
    handleChange({ target: { name: "PaletteName", value: "" } });
  };

  const handleSubmit = () => {
    setStage("emoji");
  };

  return (
    <div>
      <Dialog
        open={stage === "emoji" && true}
        onClose={handleClose}
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "Center",
        }}
      >
        <DialogTitle textAlign={"center"} fontSize={"2rem"}>
          Choose a Palette Emoji
        </DialogTitle>
        <div style={{ margin: "2em" }}>
          <Picker
            data={data}
            onEmojiSelect={(emoji) => {
              savePalette(emoji.native);
              setStage("");
            }}
          />
        </div>
      </Dialog>
      <Dialog
        open={formShowing & (stage === "set name")}
        onClose={handleClose}
        fullWidth
      >
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new Palette. <br />
              Make sure its unique!
            </DialogContentText>
            <TextValidator
              label="Palette Name"
              name="PaletteName"
              value={PaletteName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "Palette Name already in use",
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">
              Save Name
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
