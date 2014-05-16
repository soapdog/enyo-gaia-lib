/**
 * _gaia.Header_ implements the application header menu used by Firefox OS applications.
 *
 * Documentation for the header is available at http://buildingfirefoxos.com/building-blocks/headers.html
 */

enyo.kind({
    name: "gaia.Header",
    tag: "header",
    published: {
        hasDrawer: false
    },
    create: function() {
        this.inherited(arguments);

        //this.hasDrawerChanged();
    },
    hasDrawerChanged: function(inOldValue) {
        if (this.hasDrawer) {
            this.log("creating drawer buttons");
            /*
            Drawer code can be seen at:
             http://buildingfirefoxos.com/building-blocks/drawer.html

             It requires two <a> for the menu.
             */
            this.createComponents([
                {tag: "a", attributes: {href: "#" + this.getId()}, components: [{tag: "span", classes: "icon icon-menu", content: "hide sidebar"}]},
                {tag: "a", attributes: {href: "#" + this.container.getId()}, components: [{tag: "span", classes: "icon icon-menu", content: "show sidebar"}]}
            ], {owner: this});
        }

        this.log("end");
    },
    initComponents: function() {
        this.createChrome(this.chrome);
        this.discoverControlParent();
        this.log("Tentando adicionar drawer");
        if (this.hasDrawer) {
            this.log("creating drawer buttons");
            /*
             Drawer code can be seen at:
             http://buildingfirefoxos.com/building-blocks/drawer.html

             It requires two <a> for the menu.
             */
            this.createComponents([
                {tag: "a", attributes: {href: "#" + this.getId()}, components: [{tag: "span", classes: "icon icon-menu", content: "hide sidebar"}]},
                {tag: "a", attributes: {href: "#" + this.container.getId()}, components: [{tag: "span", classes: "icon icon-menu", content: "show sidebar"}]}
            ], {owner: this});
        }
        this.inherited(arguments);

    }
});
