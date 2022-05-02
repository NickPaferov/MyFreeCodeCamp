function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum]
    } else {
        return rangeOfNumbers(startNum, endNum - 1).concat(endNum)
    }
}