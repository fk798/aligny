const fs = require("fs");

const names = []
console.log(__dirname);
fs.readdir(__dirname + "/../../../images/2018", function(err, items) {
    console.log("[");
    for (var i = 0; i < items.length; i++) {
        console.log("{ original: 'https://s3.amazonaws.com/aaany-assets/images/2018/" + items[i] + "' }, ");
    }
    console.log("]");
})
