enyo.kind({
    name: "gaia.ProgressBar",
    kind: "gaia.Spinner",
    published: {
        value: "0",
        maxValue: "100"
    },
    create: function() {
        this.inherited(arguments);

        this.valueChanged();
        this.maxChanged();
    },
    valueChanged: function() {
        this.setAttribute("value", this.value);
    },
    maxChanged: function() {
        this.setAttribute("max", this.maxValue);
    }
})