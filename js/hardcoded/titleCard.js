//# sourceURL=titleCard.js

var titleCard = document.createElement("div");
titleCard.className = "title";
titleCard.innerHTML = '<p>kinexys presents</p>'
    + '<h1>Bad Actor</h1>'
    + '<p>a game about breaking in, taking control, and spreading out</p>'
    + '<p>and apparently about spending all godamn morning fussing with Blazor and react</p>';
document.body.appendChild(titleCard);

// TODO: convenience method
var titleStyle = document.createElement("style");
document.head.appendChild(titleStyle);

var cssString = `
.title {
    color: #555;
    text-shadow: 0px 1px 0px rgba(255,255,255,.5);
    font-family: "Century Gothic", "Helvetica", sans-serif;
    font-weight: bold;
    text-align: center;
    user-select: none;
}
`;
titleStyle.appendChild(document.createTextNode(cssString));

// modal
// enter machine name ...