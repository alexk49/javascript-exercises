const reverseString = function(string) {
    let characters = Array.from(string);
    let reversed = "";

    for (let i = 1; i < string.length + 1; i++) {
        reverseIndex = (string.length - i);
        reversed = reversed + characters[reverseIndex];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
