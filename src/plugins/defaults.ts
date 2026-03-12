export default {
  VTextField: {
    density: "comfortable",
    variant: "outlined",
    class: "[&_.v-field]:rounded-lg [&_.v-field]:transition-all [&_.v-field]:duration-200"
  },

  VChip: {
    tile: true,
    class: "rounded-lg",
  },
  VCombobox: {
    density: "compact",
    variant: "outlined",
  },
  VSelect: {
    density: "compact",
    variant: "outlined",
  },
  VTextarea: {
    variant: "outlined",
  },
  VPagination: {
    totalVisible: 8,
    variant: "compact",
    color: "submit",
  },
  VTooltip: {
    location: "top",
  },
  VTable: {
    VChip: {
      class: "justify-center rounded-lg text-sm w-[90%]",
    },
  },
  VTab: {
    class: "text-none",
  },
  VBtn: {
    class: "rounded-lg text-none cursor-pointer transition-all duration-200 transform hover:scale-[1.02]",
    height: "40",
  },
  VFab: {
    height: "60",
    width: "60",
    VBtn: {
      class: "rounded-[100%] text-none cursor-pointer",
    },
  },
  VSwitch: {
    inset: true,
    hideDetails: true,
    color: "success",
    density: "compact",
  },
  VFileInput: {
    variant: "outlined",
  },
  VDateInput: {
    placeholder: "dd/mm/yyyy",
    variant: "outlined",
    prependIcon: "",
    density: "compact",
    hideActions: true,
  },
  VCard: {
    class: "rounded-lg",
  },
};
