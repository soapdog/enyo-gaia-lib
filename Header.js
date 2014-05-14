enyo.kind({
  name: "gaia.Header",
  tag: "section",
  attributes: {
    role: "region"
  },
  published: {
    title: "",
    buttons: "",
    subtitle: "",
    drawerButton: false
  },
  components: [
    {tag: "header", name: "header", components: [
      {tag: "menu", name: "menu", attributes: {type: "toolbar"}},
      {tag: "h1", name: "headerTitle", content: "My App"}
    ]}
  ],
  create: function() {
    this.inherited(arguments);
    this.titleChanged();
    this.menuChanged();
    this.subtitleChanged();
    this.leftButtonChanged();
  },
  titleChanged: function() {
    this.$.headerTitle.setContent(this.title);
    this.render();
  },
  menuChanged: function() {
    this.$.menu.createComponents(this.buttons, {owner: this.$.menu});
  },
  subtitleChanged: function() {
    if (this.$.subtitleHeader && this.$.subtitleHeader.hasNode()) {
      this.$.subtitleHeader.destroy();
    }
    this.$.header.createComponent({
      tag: "header",
      name: "subtitleHeader",
      components: [
        {tag: "h2", name: "subtitleHeaderTitle", content: this.subtitle}
      ]
    },
    {owner: this.$.header});
  },
  leftButtonChanged: function() {
    if (this.$.drawerButton && this.$.openButton.hasNode() && this.$.closeButton.hasNode()) {
      this.$.openButton.destroy();
      this.$.closeButton.destroy();
    }
    this.log("creating left menu button with icon " + this.leftButton);
    this.$.header.createComponents([
      {
        kind: "gaia.HeaderButton",
        name: "openButton",
        target: "close",
        icon: "icon-menu",
        owner: this.$.header
      },
      {
        kind: "gaia.HeaderButton",
        name: "closeButton",
        target: this.getId(),
        icon: "icon-menu",
        owner: this.$.header
      }
    ],
    {addBefore: this.$.menu});
  }
})
