enyo.kind({
  name: "gaia.ActionButton",
  tag: "li",
  published: {
    label: "",
    icon: ""
  },
  handlers: {
    ondown: "down",
    onenter: "enter",
    ondragfinish: "dragfinish",
    onleave: "leave",
    onup: "up",
    ontap: "tap"
  },
  components: [
    {kind: "enyo.Button", classes: "action-icon", name: "button"}
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
  down: function(inSender, inEvent) {
    if (this.disabled) {
      return true;
    }
    this.log("down");
  },
  enter: function(inSender, inEvent) {
    if (this.disabled) {
      return true;
    }
    this.log("enter");
  },
  dragfinish: function(inSender, inEvent) {
    if (this.disabled) {
      return true;
    }
    this.log("dragfinish");
  },
  up: function(inSender, inEvent) {
    if (this.disabled) {
      return true;
    }
    this.log("up");
  },
  leave: function(inSender, inEvent) {
    if (this.disabled) {
      return true;
    }
    this.log("leave");
  },
  tap: function() {
    if (this.disabled) {
      return true;
    }
    this.log("tap!");
  }
});
