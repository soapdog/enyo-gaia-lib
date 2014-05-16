enyo.kind({
    name: "gaia.IconButton",
    tag: "button",
    published: {
        icon: ""
    },
    components: [
        {
            tag: "span",
            classes: "icon",
            name: "content"
        }
    ],
    create: function() {
        this.inherited(arguments);
        this.iconChanged();
    },
    iconChanged: function() {
        this.$.content.addClass(this.icon);
        this.$.content.setContent(this.icon);
    }
});