enyo.kind({
  name: "gaia.HeaderButton",
  tag: "a",
  published: {
    label: "nolabel",
    icon: "icon-add",
    target: "#"
  },
  attributes: {
    href: "#"
  },
  components: [
    {tag: "span", classes: "icon", name: "button"}
  ],
  create: function() {
    this.inherited(arguments);
    this.iconChanged();
    this.targetChanged();
  },
  iconChanged: function(inOldValue) {
    this.log("Changing icon from " + inOldValue + " to " + this.icon);
    this.$.button.removeClass(inOldValue);
    this.$.button.addClass(this.icon);
  },
  targetChanged: function() {
    this.setAttribute("href", "#" + this.target);
  }
})
