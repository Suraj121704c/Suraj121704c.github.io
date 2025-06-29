// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "customDark.900" : "#f7fafc",
        color: props.colorMode === "dark" ? "white" : "black",
        transition: "all 0.3s ease",
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
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923",
    },
  },
  components: {
    Button: {
      baseStyle: (props) => ({
        _hover: {
          transform: "translateY(-2px)",
          boxShadow: "lg",
        },
        transition: "all 0.2s ease",
      }),
    },
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: props.colorMode === "dark" ? "gray.800" : "white",
          color: props.colorMode === "dark" ? "white" : "black",
          border: props.colorMode === "dark" ? "1px solid" : "1px solid",
          borderColor: props.colorMode === "dark" ? "gray.700" : "gray.200",
        },
      }),
    },
  },
});

export default customTheme;
