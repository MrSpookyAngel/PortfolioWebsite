import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    special: {
      name: string;
      county: string;
      school: string;
    };
  }
  interface PaletteOptions {
    hover?: {
      main: string;
    };
    indicator?: {
      main: string;
    };
    special?: {
      name: string;
      county: string;
      school: string;
    };
  }
}

const SpaceTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#c770f0" }, // purple
    secondary: { main: "#f2f5f7" }, // light blue
    special: {
      name: "#e11d48", // red
      county: "#fb923c", // orange
      school: "#3b82f6", // blue
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default SpaceTheme;
