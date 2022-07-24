function smallestCommons(arr) {
    debugger
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    let nok = max
    for (let i = max; i >= min; i--) {
        if (nok % i !== 0) {
            nok += max
            i = max
        }
    }
    return nok
}

console.log(smallestCommons([1, 5]))
