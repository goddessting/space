function addCommaArrary(numArrays) {
    var count = 0;
    var commaArray = [];
    numArrays.forEach(function (numArray) {
        commaArray.push(numArray);
        count++;
        if (count % 3 === 0 && count < numArrays.length) {
            commaArray.push(',');
        }
    });

    return commaArray;
}

function sortNumberArray(number){
    var numberArray = '';
    for (var i = number.length - 1; i >= 0; i--) {
        numberArray += number[i];
    }

    return numberArray;
}

function returnSortNumber(arrayElement) {
    var sortNumber = [];
    for (var i = arrayElement.length - 1; i >= 0; i--) {
        sortNumber.push(arrayElement[i]);
    }

    return sortNumber;
}

function thousands_separators(num) {
    var arrays = num.toString().split(".");
    if (arrays.length === 1) {
        arrays.push('0');
    }
    var arrayElement = arrays[0].toString().split("");

    var sortNumber = returnSortNumber(arrayElement);
    var commaArray = addCommaArrary(sortNumber);
    var numberArray = sortNumberArray(commaArray);
    if (arrays[1] > 0) {
        numberArray = numberArray + "." + arrays[1];
    }

    return numberArray;
}

module.exports = thousands_separators;
