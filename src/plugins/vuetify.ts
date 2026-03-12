import { createVuetify } from "vuetify";
import { VDateInput } from "vuetify/labs/VDateInput";
import { VBtn } from "vuetify/components";
import { themes } from "./theme";
import defaults from "./defaults";
import * as directives from "vuetify/directives";

export default createVuetify({
  components: {
    VDateInput,
    VBtn,
  },
  locale: {
    locale: "pt-BR",
  },
  directives,
  defaults,
  theme: {
    defaultTheme: "light",
    themes,
  },
});
