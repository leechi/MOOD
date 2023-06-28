let autoplay = document.querySelector('.autoplay')

let posters = document.querySelectorAll('.movie__poster img')

let answer = [{
    img : 'asset/poster/anger/harryPotter.jpg'    
},{
    img : 'asset/poster/anger/Paris.jpg'    
},{
    img : 'asset/poster/anger/secret.jpg'    
},{
    img : 'asset/poster/anger/topGun.jpg'    
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