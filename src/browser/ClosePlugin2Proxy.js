module.exports = {
    coolMethod: function (arg0, success, error) {
        console.log("ClosePlugin2.coolMethod called in browser environment with argument: " + arg0);

        // Simulate a successful call
        setTimeout(function() {
            success("Browser simulation: CoolMethod succeeded with " + arg0);
        }, 500); // Simulate a short delay
    }
};

require("cordova/exec/proxy").add("ClosePlugin2", module.exports);