/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

var counter = 0;
var lbl;
const http = require("http");

exports.pageLoaded = function(args) {
    var page = args.object;
    lbl = page.getViewById("lblCounter")
}

exports.onTap = function() {

    counter++;
    lbl.text = counter + "taps"
}
exports.onTap2 = function() {

    lbl.text =  "---";
    
    http.request({
        url: "https://httpbin.org/post",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({ firstname: "Nic", lastname: "Raboy" })
    }).then(function(result) {
        console.log(JSON.stringify(result));
        lbl.text = JSON.stringify(result);
    }, function(error) {
        console.error(JSON.stringify(error));
        lbl.text = JSON.stringify(error);
    });
}


