/*function convertHTML(str) {
    return str.split(``).map(el => el === `&` ? `&amp;`
        : el === `<` ? `&lt;`
            : el === `>` ? `&gt;`
                : el === `"` ? `&quot;`
                    : el === `'` ? `&apos;`
                        : el).join(``)
}*/

function convertHTML(str) {
    let arr = str.split(``)
    for (let i = 0; i < str.length; i++) {
        switch (arr[i]) {
            case `&`:
                arr[i] = `&amp;`
                break
            case `<`:
                arr[i] = `&lt;`
                break
            case `>`:
                arr[i] = `&gt;`
                break
            case `"`:
                arr[i] = `&quot;`
                break
            case `'`:
                arr[i] = `&apos;`
                break
        }
    }
    return arr.join(``)
}

convertHTML("Dolce & Gabbana")