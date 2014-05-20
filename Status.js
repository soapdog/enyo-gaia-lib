enyo.kind({
    name: "gaia.Status",
    tag: "section",
    attributes: {
        role: "status"
    },
    published: {
        status: ""
    },
    components: [
        {tag: "p", name: "content", allowHtml: true}
    ],
    create: function() {
        this.inherited(arguments);

        this.statusChanged();
    },
    statusChanged: function() {
        this.$.content.setContent(this.status);
    }

});