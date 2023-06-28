let profileImg = document.querySelector('.img-profile__img')
let dropdownMenu = document.querySelector('.header__profile__dropdown')
let main = document.querySelector('.main')


profileImg.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden')
})

main.addEventListener('mouseover', () => {
    dropdownMenu.classList.add('hidden')
})
