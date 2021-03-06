export const keyboard = document.getElementById('keyboard')

export const qwerty = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

export function createKeyboard() {
    qwerty.forEach(line => {
        const row = document.createElement('div')
        row.classList.add('row')
        keyboard.append(row)

        const line_div = document.createElement('div')
        line_div.classList.add('line')
        row.append(line_div)

        line.forEach(key => {
            const key_div = document.createElement('div')
            key_div.classList.add('z-depth-1')
            key_div.classList.add('key')
            key_div.innerHTML = key
            line_div.append(key_div)
        })
    })
}

// createKeyboard()
