//# sourceURL=application.js

BadActor.Application = function(options) {

    if(!this.validate(options)) return;

    this.name = options.name;

    if(options.icon) this.icon = options.icon;
    if(options.iconText) this.iconText = options.iconText;

    // unlocked true / false?

    // associated nodes?

    this.think();
}

BadActor.Application.prototype = {

    validate: function(options) {

        if(!options.name) return false;

        return true;
    },

    think: function() {
        console.log(this.name + " thinking ...");

        setTimeout(this.think, 1000);
    }
}