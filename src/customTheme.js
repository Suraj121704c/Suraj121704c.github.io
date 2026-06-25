// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `"Space Grotesk", "Inter", sans-serif`,
    body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? "radial-gradient(1200px 600px at 80% -10%, rgba(139,92,246,0.16), transparent 60%), radial-gradient(900px 500px at 0% 20%, rgba(99,102,241,0.14), transparent 55%), #0b1120"
            : "radial-gradient(1200px 600px at 85% -10%, rgba(139,92,246,0.10), transparent 60%), radial-gradient(900px 500px at -5% 15%, rgba(99,102,241,0.10), transparent 55%), #f8fafc",
        color: props.colorMode === "dark" ? "#e2e8f0" : "#0f172a",
        transition: "background 0.4s ease, color 0.3s ease",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
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
