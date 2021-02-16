export default {
  mounted() {
    if (!localStorage.getItem('accent-color')) {
      localStorage.setItem('accent-color', 'blue');
    }

    this.setPageColor();
    // console.log(localStorage.getItem('accent-color'))
  },

  beforeUpdate() {
    this.setPageColor();
  },

  methods: {
    setColor(color) {
      if (color === null) return;

      const classes = document.body.classList;
      const colors = ["red", "blue", "green", "purple"]
        .map(colorTheme => `reco-theme-${colorTheme}`);

      classes.remove(...colors.filter(t => t !== `reco-theme-${color}`));
      classes.add(`reco-theme-${color}`);

      localStorage.setItem('accent-color', color)

    },

    setPageColor() {
      const color = localStorage.getItem('accent-color');
      this.setColor(color);
    },
  },
};
