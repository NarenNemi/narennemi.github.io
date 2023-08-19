const burgerButton = document.getElementById('hamburger')
const navlist = document.getElementById('navlist')

function toggleButton() {
navlist.classList.toggle('show')
}

burgerButton.addEventListener('click', toggleButton)