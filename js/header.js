let profileImg = document.querySelector('.img-profile__img')
let dropdownMenu = document.querySelector('.header__profile__dropdown')
let main = document.querySelector('.main')
let hashTag = document.querySelector('.header__search')
let hashTagBox = document.querySelector('.header__hashtag')
let hashTags = document.querySelectorAll('.header__hashtag ul li')


profileImg.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden')
})

main.addEventListener('mouseover', () => {
    dropdownMenu.classList.add('hidden')
    hashTagBox.classList.add('hidden')
})


hashTag.addEventListener('click',()=>{
       hashTagBox.classList.toggle('hidden')
})

hashTags.forEach((hashtag) => {
    hashtag.innerText = `hi`
})