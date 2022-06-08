/*function mutation(arr) {
    let str1 = arr[0].toLowerCase()
    let str2 = arr[1].toLowerCase()
    let resArr = []
    for (let i = 0; i < str2.length; i++) {
        resArr.push(str1.indexOf(str2[i]))
    }
    return !resArr.includes(-1)
}

mutation(["hello", "hey"])*/

function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every(el => arr[0].toLowerCase().indexOf(el) !== -1)
}