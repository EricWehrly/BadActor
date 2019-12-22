//# sourceURL=customStyles.js

BadActor.AddCustomStyle = function(cssString) {

    var customStyle = document.createElement("style");
    document.head.appendChild(customStyle);

    customStyle.appendChild(document.createTextNode(cssString));
}
