import sizes from "./sizes";
import bg from "./bg.svg";

const PaletteListStyles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#5ADFFF",
    backgroundImage: `url(${bg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    /* Background by SVGBackgrounds.com */
    overflow: "scroll",
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
  },
  heading: {
    fontSize: "2rem",
    [sizes.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "white",
      fontWeight: "700",
      [sizes.down("xs")]: {
        fontSize: "0.8rem",
        marginLeft: "10px",
      },
      "&:hover": {
        color: "#2633ab",
        transition: "all 0.3s ease-in-out",
        textDecoration: "underline",
      },
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },

    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem",
    },
  },
};

export default PaletteListStyles;
