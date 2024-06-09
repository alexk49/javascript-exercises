const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let newString = "";
    let counter = 0
    while (counter < num) {
        newString = newString + string;
        counter += 1;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
