const burger = document.getElementById('burger')
const navigacija = document.getElementById('navigacija')

burger.addEventListener('click', function() {
    navigacija.classList.toggle('hide')
})