BadActor.UI = {};

BadActor.UI.SetUp = function() {
    BadActor.UI.ResourceArea = document.createElement("div");
    BadActor.UI.ResourceArea.id = "resources";
    document.body.appendChild(BadActor.UI.ResourceArea);
}

BadActor.UI.DrawResource = function(resourceObject) {

}

BadActor.UI.Button = function(text, iconText, callback) {

    var button = document.createElement("button");
    button.className = "btn";
    button.setAttribute("onClick", callback);
    // button.onClick = callback;

    if(text) button.innerText = text;
    // should we put the icon in a span in the button?
    if(iconText) {
        if(iconText.includes("mdi")) iconText = "mdi " + iconText;
        button.className += ' ' + iconText;
    }

    document.body.appendChild(button);

    return button;
}

BadActor.UI.SetUp();
