enyo.kind({
    name: "gaia.Tab",
    tag: "li",
    attributes: {
        role: "presentation"
    },
    published: {
        icon: ""
    },
    components: [
        {
            tag: "a",
            name: "tabButton",
            attributes: {
                href: "#",
                role: "tab"
            },
            classes: "icon"
        }
    ],
    create: function() {
        this.inherited(arguments);

        this.$.tabButton.setAttribute("href", "#" + this.container.getId());
        this.iconChanged();
    },
    iconChanged: function() {
        this.$.tabButton.setContent(this.icon);
    }
});