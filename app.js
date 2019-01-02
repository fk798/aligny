const fs = require("fs");

const names = []
console.log(__dirname);
fs.readdir(__dirname + "/src/components/images/2017", function(err, items) {
    console.log("[");
    for (var i = 0; i < items.length; i++) {
        console.log("{ original: require('../images/2017/" + items[i] + "') }, ");
    }
    console.log("]");
})
