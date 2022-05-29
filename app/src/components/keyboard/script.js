const keyboard = document.getElementById('keyboard')

const qwerty = [
    ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['y', 'x', 'c', 'v', 'b', 'n', 'm']
]

function createKeyboard() {
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

createKeyboard()
