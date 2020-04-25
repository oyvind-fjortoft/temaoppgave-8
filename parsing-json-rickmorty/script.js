import RickMorty from './data/rickmorty.js'

let inp = document.querySelector('#search')



const showCharacter = (character) => {
    let characters = document.querySelector('#characters')
    let article = document.createElement('article')
    let h1 = document.createElement('h1')
    h1.innerHTML = character.name
    article.appendChild(h1)
    characters.appendChild(article)
}

showCharacter(RickMorty.results[0])