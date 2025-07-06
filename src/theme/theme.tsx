import { createTheme } from "@mui/material/styles";
import { colors } from "../utils/consts/colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.background.paper,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.text.primary,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    error: {
      main: colors.error,
      light: colors.primary.light,
      dark: colors.primary.dark,
    },
    warning: {
      main: colors.warning,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
    },
    info: {
      main: colors.info,
      light: "#64B5F6",
      dark: "#1976D2",
    },
    success: {
      main: colors.success,
      light: "#81C784",
      dark: "#388E3C",
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
    divider: colors.divider,
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontWeight: 700, fontSize: "2.4rem", letterSpacing: "-0.01562em" },
    h2: { fontWeight: 700, fontSize: "1.9rem", letterSpacing: "-0.00833em" },
    h3: { fontWeight: 600, fontSize: "1.4rem" },
    h4: { fontWeight: 600, fontSize: "1.2rem" },
    h5: { fontWeight: 500, fontSize: "1.05rem" },
    h6: { fontWeight: 500, fontSize: "0.95rem" },
    subtitle1: { fontWeight: 400, fontSize: "0.95rem" },
    subtitle2: { fontWeight: 400, fontSize: "0.85rem" },
    body1: { fontWeight: 400, fontSize: "0.95rem" },
    body2: { fontWeight: 400, fontSize: "0.85rem" },
    button: { fontWeight: 500, textTransform: "none", letterSpacing: "0.03em" },
    caption: { fontWeight: 400, fontSize: "0.75rem" },
    overline: { fontWeight: 400, fontSize: "0.7rem", letterSpacing: "0.1em" },
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: colors.background.default,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          fontSize: "1rem",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
  },
});
