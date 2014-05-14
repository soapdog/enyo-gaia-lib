enyo.kind({
    name: "gaia.Tabs",
    published: {
        tabs: ""
    },
    events: {
        onTabChanged: ""
    },
    components: [
        {tag: "ul", name: "list", classes: "bb-tablist", attributes: {"data-type": "filter", role: "tablist"}}
    ],
    create: function() {
        this.inherited(arguments);

        this.tabsChanged();
    },
    tabsChanged: function() {
        this.$.list.destroyComponents();

        enyo.forEach(this.tabs, this.bindSafely("addTab"));
    },
    addTab: function(inObj, inIndex) {
        this.$.list.createComponent({
            tag: "li",
            attributes: {
                role: "presentation"
            },
            components: [
                {
                    tag: "a",
                    attributes: {
                        href: "#",
                        role: "tab"
                    },
                    content: inObj.name
                }
            ]
        });
    }
})