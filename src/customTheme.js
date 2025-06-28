// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "customDark.900" : "white",
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
  colors: {
    customDark: {
      10: "#linear-gradient(to right, black, gray, darkgreen)",
      50: "#e4e4e7",
      100: "#b0b0b9",
      200: "#7c7c8b",
      300: "#48485d",
      400: "#14142f",
      500: "#0e0e25",
      600: "#09091a",
      700: "#050510",
      800: "#020205",
      900: "#000000",
    },
  },
});

export default customTheme;
