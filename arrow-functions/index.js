/** 

console.log('Her er jeg')

function square(tall, name) {
    return name + ', regnestykket ditt gir: ' + tall * tall
}

console.log(square(16, 'Per'))

const squareA = (tall) => {
    return tall * tall
}

console.log(squareA(21))

const squareA = tall => tall * 15 + ' er resultatet'

console.log(squareA(21))



const fler = (name1, name2) => 'Hei ' + name1 + ' og ' + name2

console.log(fler('Simon', 'Per'))

// setTimeout(() => document.querySelector('body').style.backgroundColor = 'orange', 2000)



const antallTegn = ord => 'dette ordet har ' + ord.length + ' bokstaver'

console.log(antallTegn('nikodemos'))

const tallene = [12, 4, 6, 8, 23, 564, 32]

tallene.map(tall => console.log(tall))



const ordene = ['løver', 'katter', 'elefanter', 'oligarker', 'prinser']

let str = ''
ordene.map(ord => {
    str += `<section>Det satt to ${ord} på et bord</section>`
})

body.innerHTML = str

*/

let body = document.querySelector('body')

let books = []


fetch('https://www.googleapis.com/books/v1/volumes?q=nygårdshaug')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        books = json.items
        str = ''
        showBooks()
    })

const showBooks = () => {
    books.map(book => {
        let sec = document.createElement('section')
        sec.innerHTML = book.volumeInfo.title
        if (book.volumeInfo.imageLinks) {
            sec.style.backgroundImage = ùrl($ {})
        }
        body.appendChild(sec)
    })
    body.innerHTML = str
}


// HTTP RESPONSE -> JSON