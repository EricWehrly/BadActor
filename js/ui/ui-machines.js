//# sourceURL=ui-machines.js

BadActor.UI._machinesContainer = document.createElement("div");
BadActor.UI._machinesContainer.id = "";
document.body.appendChild(BadActor.UI._machinesContainer);

BadActor.UI.ReDrawMachines = function() {

    for(var index = 0; index < BadActor.MachineList.length; index++) {
        var machine = BadActor.MachineList[index];

        console.log(machine);
    }
}

BadActor.Events.Subscribe("Machines Change", BadActor.UI.ReDrawMachines);
