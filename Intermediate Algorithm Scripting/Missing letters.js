function fearNotLetter(str) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if (alphabet.includes(str.split(""))) {
        return undefined
    } else {
        let start = alphabet.indexOf(str[0])
        for (let i = start; i < start + str.length; i++) {
            if (!(str.split("")).includes(alphabet[i])) {
                return alphabet[i]
            }
        }
    }
}

fearNotLetter("abce")