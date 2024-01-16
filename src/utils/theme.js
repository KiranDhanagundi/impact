import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#ffffff",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0648b3",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
