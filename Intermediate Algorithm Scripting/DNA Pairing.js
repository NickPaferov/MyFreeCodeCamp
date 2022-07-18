function pairElement(str) {
    let resArr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            resArr.push([str[i], "T"])
        } else if (str[i] === "T") {
            resArr.push([str[i], "A"])
        } else if (str[i] === "C") {
            resArr.push([str[i], "G"])
        } else if (str[i] === "G") {
            resArr.push([str[i], "C"])
        }
    }
    return resArr
}

pairElement("GCG")