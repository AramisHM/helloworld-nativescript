/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

var counter = 0;
var lbl;

exports.pageLoaded = function(args) {
    var page = args.object;
    lbl = page.getViewById("lblCounter")
}
exports.onTap = function() {

    counter++;
    lbl.text = counter + "taps"
}
const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
