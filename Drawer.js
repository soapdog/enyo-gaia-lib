enyo.kind({
    name: "gaia.Drawer",
    tag: "section",
    attributes: {
        "data-type": "sidebar"
    },
    published: {
        title: ""
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
    },
    titleChanged: function () {
        this.$.headerTitle.setContent(this.title);
    }
});
