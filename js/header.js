let profileImg = document.querySelector('.img-profile')
let dropdownMenu = document.querySelector('.header__profile__dropdown')



profileImg.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden')
})