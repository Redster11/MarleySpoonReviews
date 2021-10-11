(function() {
    "use strict";
    
    function readJSONFile(file, callback) {
        const rawFile = new XMLHttpRequest();
        console.log('here');
        rawFile.overrideMimeType("application/json");
        rawFile.addEventListener("load", callback, false);
        rawFile.open("get", file);
        rawFile.send();
    }
    readJSONFile("reviews/text.json", function(text){
        const data = JSON.parse(text);
        console.log(data);
    });
})();