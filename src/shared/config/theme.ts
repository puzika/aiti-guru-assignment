import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#F9F9F9",
        },
        primary: {
          main: "#242EDB"
        }
      }
    }
  }
});