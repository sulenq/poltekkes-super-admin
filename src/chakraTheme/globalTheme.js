import { extendTheme } from "@chakra-ui/react";

export const globalTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    p: {
      50: "#f1f8ff",
      100: "#dafcd5",
      200: "#aff9ac",
      300: "#7fed85",
      400: "#5cdc70",
      500: "#2dc653",
      600: "#20aa50",
      700: "#168e4b",
      800: "#0e7244",
      900: "#085f3f",
    },
    ap: {
      50: "#2dc6531b",
      100: "#2dc6532b",
      200: "#2dc653",
      300: "#2dc653",
      400: "#2dc653",
      500: "#2dc653",
      600: "#2dc653",
      700: "#2dc653",
      800: "#2dc653",
      900: "#2dc653",
    },
    ad: {
      50: "#bfbfbf15",
      100: "#bfbfbf15",
      200: "#bfbfbf15",
      300: "#bfbfbf15",
      400: "#bfbfbf15",
      500: "#bfbfbf15",
      600: "#bfbfbf15",
      700: "#bfbfbf15",
      800: "#bfbfbf15",
      900: "#bfbfbf15",
    },
    ared: {
      50: "#E53E3E1b",
      100: "#E53E3E2b",
      200: "#E53E3E",
      300: "#E53E3E",
      400: "#E53E3E",
      500: "#E53E3E",
      600: "#E53E3E",
      700: "#E53E3E",
      800: "#E53E3E",
      900: "#E53E3E",
    },
    bnw: {
      200: "white",
      300: "white",
      500: "#000000",
      600: "#000000",
    },
    wnb: {
      200: "#000000",
      300: "#000000",
      500: "white",
      600: "white",
    },
    b: "#000000",
    bt: "#333333",
    w: "white",
    wt: "#eeeeee",
    dark: "#1F2937",
    error: "#E53E3E",
  },

  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1F2937" : "white",
        color: props.colorMode === "dark" ? "wt" : "bt",
      },
    }),
  },

  components: {
    Badge: {
      baseStyle: (props) => ({
        p: "4px 16px",
        borderRadius: 8,
        textTransform: "none",
      }),
    },
    Drawer: {
      baseStyle: (props) => ({
        dialog: {
          bg: "transparent",
          color: props.colorMode === "dark" ? "wt" : "wt",
          boxShadow: "none",
        },
      }),
    },

    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === "dark" ? "dark" : "white",
          color: props.colorMode === "dark" ? "wt" : "bt",
          boxShadow: "none",
          borderRadius: "24px",
          mx: "16px",
          backdropFilter: "blur(20px)",
        },
        overlay: {
          bg: "#5b5b5b50",
          backdropFilter: "blur(5px)",
        },
        header: {
          py: "20px",
          px: "24px",
          pr: "70px !important",
        },
        body: {
          px: "24px",
          py: "0px !important",
        },
        footer: {
          p: "24px",
        },
        closeButton: {
          borderRadius: "full",
          right: 4,
          top: 4,
          fontSize: "13px !important",
        },
      }),
    },

    Toast: {
      baseStyle: {
        fontSize: [13, null, 15],
      },
    },

    Menu: {
      baseStyle: (props) => ({
        groupTitle: {
          opacity: 0.5,
          cursor: "default",
        },
        divider: {
          my: 0,
        },
        list: {
          bg: props.colorMode === "dark" ? "dark" : "white",
          border: "1px solid var(--divider3)",
          p: 0,
          overflow: "hidden",
          boxShadow: "none",
          borderRadius: "8px",
        },
        item: {
          bg: "transparent",
          _hover: { bg: "var(--divider)" },
          py: 3,
          px: 4,
        },
      }),
    },

    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: "8px",
      },
      variants: {
        outline: {
          // border: "2px solid",
        },
      },
    },

    Input: {
      baseStyle: (props) => ({
        field: {
          _autofill: {
            boxShadow:
              props.colorMode === "dark"
                ? "0 0 0px 1000px dark inset"
                : "0 0 0px 1000px #ffffff inset",
            border: "2px solid var(--divider) !important",
          },
        },
      }),
    },

    Checkbox: {
      baseStyle: (props) => ({
        icon: {
          color: "white",
        },
        control: {
          border: props.isInvalid
            ? "1.5px solid #E53E3E"
            : "2px solid var(--divider3) !important",
        },
      }),
    },

    Tooltip: {
      baseStyle: {
        bg: "p.700",
        color: "w",
        "--popper-arrow-bg": "#0097e8",
        borderRadius: 8,
        px: 4,
        py: 2,
      },
    },

    Table: {
      sizes: {
        md: {
          th: {
            py: "16px",
            px: "12px",
          },
          td: {
            py: "16px",
            px: "12px",
          },
        },
      },
    },
  },
});
