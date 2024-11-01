let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

/* Toda vez que for clicado no botão chama a função*/
btnNext.onclick = () => moveItensOnClick('next')
btnBack.onclick = () => moveItensOnClick('back')

function moveItensOnClick(type) {
  listItems = document.querySelectorAll('.list .list-item')
  thumbItems = document.querySelectorAll('.thumb .thumb-item')

  if (type === 'next') {
    list.appendChild(listItems[0])
    thumb.appendChild(thumbItems[0])
    /*container.classList.add('next')
    Adiciona Efeitos */
    container.classList.add('next')
  } else {
    list.prepend(listItems[listItems.length - 1])
    thumb.prepend(thumbItems[listItems.length - 1])
    container.classList.add('back')
  }

  setTimeout(() => {
    container.classList.remove('next')
    container.classList.remove('back')
  }, 3000)
}
