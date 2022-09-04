const MiniPaletteStyles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    zIndex: "1",
    "&:hover": {
      cursor: "pointer",
      "& svg": {
        opacity: 1,
      },
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4.5px",
  },
  deleteBtn: {
    color: "white",
    textAlign: "center",
    position: "absolute",
    zIndex: "200",
    right: "0",
    top: "0",
    padding: "10px",
    backgroundColor: "#eb3d30",
    opacity: "0",
  },
};

export default MiniPaletteStyles;
