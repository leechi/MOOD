let infoBtn = document.querySelector('.main__buttons--info')




let detail = document.querySelector('.detail')


infoBtn.addEventListener('click', () => {
    detail.classList.add('visible')
})

let detailModal = document.createElement('div')
detailModal.classList.add('detail__modal')
detail.appendChild(detailModal)

let detailImg = document.createElement('img')
detailImg.src = 'asset/abouttime/1.jpeg'
detailImg.classList.add('detail__modal--img')
detailModal.appendChild(detailImg)

let deleteBtn = document.createElement('i')
deleteBtn.classList.add('fa-regular', 'fa-circle-xmark', 'delete')
detailModal.appendChild(deleteBtn)

let detailBtn = document.createElement('button')
detailBtn.classList.add('detail__modal--button')
let playIcon = document.createElement('i')
playIcon.classList.add('fa-solid', 'fa-play')
detailBtn.appendChild(playIcon)
detailBtn.innerText = '재생'
detailModal.appendChild(detailBtn)

let heartIcon = document.createElement('i')
heartIcon.classList.add('fa-solid', 'fa-heart', 'detail__modal--heart')
detailModal.appendChild(heartIcon)

let detailInfo = document.createElement('div')
detailInfo.classList.add('detail__info')
detailModal.appendChild(detailInfo)

let detailHeader = document.createElement('div')
detailHeader.classList.add('detail__info__header')          
detailInfo.appendChild(detailHeader)

let detailTitle = document.createElement('h1')
detailTitle.classList.add('detail__info--title')
detailTitle.innerText = '어바웃타임'
detailHeader.appendChild(detailTitle)

let detailOpenDay = document.createElement('span')
detailOpenDay.classList.add('detail__info--open-year')
detailOpenDay.innerText = '2013'
detailHeader.appendChild(detailOpenDay)

let detailRecommend = document.createElement('h1')
detailRecommend.classList.add('detail__modal--recommend')
detailRecommend.innerHTML = '<i class="fa-regular fa-face-smile"></i> 이치연 10번 봄'
detailInfo.appendChild(detailRecommend)

let detailDesc = document.createElement('p')
detailDesc.classList.add('detail__modal--desc')
detailDesc.innerText = '어바웃 타임(영어: About Time)은 2013년에 개봉한 영국의 로맨틱 코미디 드라마 영화다. 자신의 과거를 변경할 수 있는 타임슬립이란 특별한 능력을 가진 젊은 남자가 첫눈에 반한 여자와의 완벽한 사랑을 이루기 위해 시간여행을 하는 이야기다.'
detailInfo.appendChild(detailDesc)


// click

deleteBtn.addEventListener('click', () => {
    detail.classList.remove('visible')
})
