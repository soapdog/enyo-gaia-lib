enyo.kind({
  name: "gaia.Toolbar",
  tag: "div",
  attributes: {
    role: "toolbar"
  },
  components: [
    {tag: "ul", name: "leftList"},
    {tag: "ul", name: "rightList"}

  ],
  initComponents: enyo.inherit(function(sup) {
    return function() {
      sup.apply(this, arguments);
      this.$.leftList.createComponents(this.leftComponents, {owner: this.$.leftList});
      this.$.rightList.createComponents(this.rightComponents, {owner: this.$.rightList});

    };
  }),
});
