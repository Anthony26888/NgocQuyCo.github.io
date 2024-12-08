/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VNumberInput } from 'vuetify/labs/VNumberInput'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VNumberInput,
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
  display: {
    mobileBreakpoint: "sm",
    thresholds: {
      xs: 340,
      sm: 430,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: 'Noto Serif',  // Apply Google Font here
  },
});
