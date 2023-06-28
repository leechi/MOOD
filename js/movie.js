
let autoplay = document.querySelector('.autoplay')

let posters = document.querySelectorAll('.movie__poster img')

let movieTitle = document.querySelector('.movie__title')

let mainImg = document.querySelector('.main__main-img')





let answer = [{
    img: 'asset/poster/anger/harryPotter.jpg',
    title: '해리포터',
    desc: '해리포터는 재밌어',
    openday: '2000',
    recommend : '힘들다.'
},{
    img: 'asset/poster/anger/Paris.jpg',
        title: '파리는 너무 짜증나',
    desc: '파리는 더러워',
    openday: '2002',
    recommend : '힘들다.'
},{
    img: 'asset/poster/anger/secret.jpg',
        title: '비밀~',
    desc: '비밀이지롱',
    openday: '2005',
    recommend : '힘들다.'
},{
    img: 'asset/poster/anger/topGun.jpg',
        title: '탑건',
    desc: '바텀건',
    openday: '2022',
    recommend : '힘들다.'
},
    
]




for (let i = 0; i < 4; i++){
    let poster = document.createElement('div')
    poster.classList.add('movie__poster')
    let posterImg = document.createElement('img')
    posterImg.src = `${answer[i].img}`
    poster.appendChild(posterImg)
    autoplay.appendChild(poster)
    
}

let posterImg = document.querySelectorAll('.movie__poster img')
let mainTitle = document.querySelector('.main__info--title')
let mainDesc = document.querySelector('.main__info--desc')


// 포스터를 클릭하면 바로 이미지 콘솔에 뜨게끔

    for (let i = 0; i < answer.length; i++){
        posterImg[i].addEventListener('click', () => {
            mainTitle.innerHTML = answer[i].title
            mainDesc.innerHTML = answer[i].desc
            mainImg.src = answer[i].img
            console.log(posterImg[i])
            detailTitle.innerHTML = answer[i].title
            detailOpenDay.innerHTML = answer[i].openday
            detailRecommend.innerHTML = answer[i].recommend
            detailDesc.innerHTML = answer[i].desc
            detailImg.innerHTML = answer[i].img
        })   
    }  



if (savedImg === 'asset/profile_/anger.png') {
    movieTitle.innerHTML = `버럭이`
}

if (savedImg === 'asset/profile_/disgust.png') {
    movieTitle.innerHTML = `까칠이`
}

if (savedImg === 'asset/profile_/joy.png') {
   movieTitle.innerHTML = `기쁨이`
}

if (savedImg === 'asset/profile_/sadness.png') {
    movieTitle.innerHTML = `슬픔이`
}