import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

const styles = {
  navBtns: {
    marginRight: "1rem",
    [sizes.down("xs")]: {
      marginRight: "0rem",
    },
  },

  root: {
    display: "flex",
  },
  button: {
    margin: "0 0.5rem !important",
    [sizes.down("xs")]: {
      margin: "0 !important",
      padding: "0.2rem !important",
    },
  },
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export { styles, AppBar };
