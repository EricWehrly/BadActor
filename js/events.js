//# sourceURL=events.js

BadActor.Events = {};
BadActor.Events.Subscriptions = {};

BadActor.Events.Subscribe = function(eventNames, callback) {
    
    if(Array.isArray(eventNames)) {
        eventNames.forEach(function(eventName) {
            BadActor.Events._subscribe(eventName, callback);
        });
    } else {
        return BadActor.Events._subscribe(eventNames, callback);
    }
}

BadActor.Events.Broadcast = function(eventName, detail, removeAfterRaise) {

    var subscribedEvents = BadActor.Events.Subscriptions[eventName];
    for(var subscriptionId in subscribedEvents) {
        try {
            subscribedEvents[subscriptionId](detail);

            if(removeAfterRaise === true) delete subscribedEvents[subscriptionId];
        } catch(ex) {
            console.error("Issue firing subscription for event " + eventName);
            console.error(ex);
        }
    }
}

BadActor.Events._subscribe = function(eventName, callback) {

    var subscriptionId = generateId();

    if(!(eventName in BadActor.Events.Subscriptions)) BadActor.Events.Subscriptions[eventName] = {};
    BadActor.Events.Subscriptions[eventName][subscriptionId] = callback;

    return subscriptionId;
};