enyo.kind({
    name: "gaia.Header",
    tag: "header",
    published: {
        title: "",
        buttons: "",
        subtitle: "",
        drawerButton: false
    },
    components: [
        {tag: "menu", name: "menu", attributes: {type: "toolbar"}},
        {tag: "h1", name: "headerTitle", content: "My App"}
    ],
    create: function() {
        this.inherited(arguments);
        this.titleChanged();
        this.menuChanged();
        this.subtitleChanged();
        this.drawerButtonChanged();
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
        this.createComponent({
                tag: "header",
                name: "subtitleHeader",
                components: [
                    {tag: "h2", name: "subtitleHeaderTitle", content: this.subtitle}
                ]
            },
            {owner: this});
    },
    drawerButtonChanged: function() {
        if (this.$.drawerButton && this.$.openButton.hasNode() && this.$.closeButton.hasNode()) {
            this.$.openButton.destroy();
            this.$.closeButton.destroy();
        }
        this.log("creating left menu button with icon " + this.leftButton);
        this.createComponents([
                {
                    kind: "gaia.HeaderButton",
                    name: "openButton",
                    target: "close",
                    icon: "icon-menu",
                    owner: this
                },
                {
                    kind: "gaia.HeaderButton",
                    name: "closeButton",
                    target: this.container.getId(),
                    icon: "icon-menu",
                    owner: this
                }
            ],
            {addBefore: this.$.menu});
    }
});
