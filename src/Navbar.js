import React, { Component } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      format: this.props.format,
    };
    this.closeSnackbar = this.closeSnackbar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  handleSubmit(evt) {
    this.setState({ open: true, format: evt.target.value }, () =>
      setTimeout(() => this.setState({ open: false }), 4500)
    );
    this.props.handleChange(evt);
  }

  render() {
    const { level, changeLevel, showingAllColors, classes } = this.props;
    const { format, open } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">React Color Picker</Link>
        </div>
        {showingAllColors && (
          <div className="slider-container">
            <span>level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
                maximumTrackStyle={{ backgroundColor: "red", height: 10 }}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={format}
            onChange={this.handleSubmit}
          >
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed To: {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
            >
              <HighlightOffIcon />
            </IconButton>,
          ]}
          onClose={this.closeSnackbar}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
