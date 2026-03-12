import { createVuetify } from "vuetify";
import { VDateInput } from "vuetify/labs/VDateInput";
import { themes } from "./theme";
import defaults from "./defaults";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default createVuetify({
  components: {
    VDateInput,
    ...components,
  },
  locale: {
    locale: "pt-BR",
  },
  directives,
  defaults,
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    defaultTheme: "light",
    themes,
  },
});
