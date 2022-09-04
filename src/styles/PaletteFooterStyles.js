const PaletteFooterStyles = {
  PaletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: (props) => (props.showingFullPalette ? "1rem" : ""),
    marginRight: "1rem",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "1rem",
  },
};

export default PaletteFooterStyles;
