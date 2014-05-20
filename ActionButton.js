enyo.kind({
    name: "gaia.ActionButton",
    tag: "li",
    published: {
        label: "",
        icon: ""
    },
    components: [
        {tag: "button", classes: "action-icon", name: "button", ontap: "test"}
    ],
    create: function() {
        this.inherited(arguments);
        this.iconChanged();
    },
    iconChanged: function(inOldValue) {
        this.log("Changing icon from " + inOldValue + " to " + this.icon);
        this.$.button.removeClass(inOldValue);
        this.$.button.addClass(this.icon);
        this.render();
    },
    test: function() {
        this.log("test");
        this.$.button.bubbleUp("ontap");
    }
});
