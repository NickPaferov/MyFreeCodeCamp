function sumAll(arr) {
    let sum = 0
    let min = Math.min(arr[0], arr[1])
    let max = Math.max(arr[0], arr[1])
    if (min === max) {
        sum = min + max
    } else {
        for (let i = min; i <= max; i++) {
            sum += i
        }
    }
    return sum
}

sumAll([1, 4])