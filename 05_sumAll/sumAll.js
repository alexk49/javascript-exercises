const sumAll = function(num1, num2) {
    let output = 0;

    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return ("ERROR")
    }

    if (num1 < 0 || num2 < 0) {
        return ("ERROR")
    }

    let smallerNum = 0;
    let largerNum = 0;

    if (num1 < num2) {
        smallerNum = num1;
        largerNum = num2;
    }
    else {
        smallerNum = num2;
        largerNum = num1;
    }

    for (let counter = smallerNum; counter <= largerNum; counter += 1) {
        output = output + counter;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
