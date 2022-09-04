import chroma from "chroma-js";
import sizes from "./sizes";

const colorBoxStyles = {
  ColorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.showingFullPalette ? "20%" : "33.333%"),
      marginBottom: "-4px",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.showingFullPalette ? "10%" : "20%"),
      marginBottom: "-4px",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.showingFullPalette ? "5%" : "10%"),
      marginBottom: "-4px",
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
    padding: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.7)" : "white",
    border: "none",
    width: "50px",
    height: "15px",
    textAlign: "center",
    lineHeight: "15px",
    textTransform: "uppercase",
  },
  copyButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    textDecoration: "none",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.7)" : "white",

    textTransform: "uppercase",
    border: "none",
    opacity: "0",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "5rem",
      },
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  showCopyMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "11",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
};

export default colorBoxStyles;
