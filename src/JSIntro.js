
exports.Sum = function (num1, num2) {
    return num1+num2;
}

exports.SumOfArray = function (arrayOfNums) {
    var len = arrayOfNums.length;
    var sum = 0;
    for (i = 0; i < len; i++)
        sum += arrayOfNums[i];
    return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function (arrayOfNums) {
    var len = arrayOfNums.length;
    var sum = 0, i = 0, j = 0;
    for (i = 0; i < len; i++) {
        if (i == 0)
            sum += arrayOfNums[i];
        else {
            for (j = i - 1; j >= 0; j--) {
                if (arrayOfNums[i] == arrayOfNums[j])
                    break;
            }
            if (j == -1)
                sum += arrayOfNums[i];
        }
    }
    return sum;
}

exports.ReverseString = function (str) {
    var leng = str.length;
    var i = 0, j = leng - 1;
    var ch;
    var str2 = "\0";
    for (i = leng-1; i >= 0; i--) 
        str2[i] = str[i];
    return str;
}


exports.ReverseArrayOfStrings = function (arrayOfStrings) {
    var len = arrayOfStrings.length;
    for (i = 0, j = len - 1; i < j ; i++, j--) {
        var c = str[i];
        str[i] = str[j];
        str[j] = c;
    }
    return arrayOfStrings;
}