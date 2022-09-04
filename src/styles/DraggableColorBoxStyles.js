import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6px",
    "&:hover svg": {
      color: "white",
      zIndex: "0",
      transform: "scale(1.5)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
      marginBottom: "-10px",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
      marginBottom: "-10px",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    zIndex: "1",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255, 255, 255, 0.8)"
        : "rgba(0, 0, 0, 0.6)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    "& span": {
      [sizes.down("sm")]: {
        marginTop: "1rem",
      },
    },
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
    fontSize: "large",
    position: "relative",
    zIndex: "20",
  },
};

export default styles;
