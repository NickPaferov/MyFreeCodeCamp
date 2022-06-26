function destroyer(arr) {
    const itemsToDestroy = Array.from(arguments).slice(1)
    return arr.filter(el => !itemsToDestroy.includes(el))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)