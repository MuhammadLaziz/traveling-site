const menuBtn = document.querySelector('.bar-btn')
const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.menu-btn')
const loader = document.querySelector('#loader')

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open-right')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open-right')
})


