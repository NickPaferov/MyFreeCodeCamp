function titleCase(str) {
    return str
        .split(' ')
        .map(el => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase())
        .join(' ')
}

titleCase("I'm a little tea pot")