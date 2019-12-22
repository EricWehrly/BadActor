//# sourceURL=machine.js

BadActor.MachineList = [];

// a node in the network, which can do stuff
BadActor.Machine = function() {

    BadActor.MachineList.push(this);

    BadActor.Events.Broadcast("Machines Change", {
        changeType: "new",
        machine: this
    });
}