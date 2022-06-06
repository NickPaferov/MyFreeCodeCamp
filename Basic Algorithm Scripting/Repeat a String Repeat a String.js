function repeatStringNumTimes(str, num) {
    let repeatedSrt = ""
    for (let i = 0; i < num; i++) {
        repeatedSrt += str
    }
    return repeatedSrt
}

repeatStringNumTimes("abc", 3)