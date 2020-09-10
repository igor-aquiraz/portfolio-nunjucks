const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener('click', function(){
        idVideo = card.getAttribute("id") 
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${idVideo}`
    })
}

document.querySelector('.modal-close').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})