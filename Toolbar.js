enyo.kind({
    name: "gaia.Toolbar",
    tag: "div",
    attributes: {
        role: "toolbar"
    },
    published: {
        rightSideComponents: ""
    },
    components: [
        {tag: "ul", name: "client"},
        {tag: "ul", name: "rightSide"}

    ],
    initComponents: function() {
        this.inherited(arguments);
        this.createChrome(this.chrome);
        this.discoverControlParent();
    },
    create: function() {
        this.inherited(arguments);

        if (this.rightSideComponents) {
            this.$.rightSide.createComponents(this.rightSideComponents, {owner: this.$.righSide});
        }
    }
});
