{/* <main class="main">
    <img src="asset/main/abouttime.gif" class="main__main-img" alt="">
    <div class="main__box">
        <section class="main__info">
            <h1 class="main__info--title">aboutTime</h1>
            <p class="main__info--desc">우리는 모두 일상 속에서 시간여행을 하고 있어.</p>
        </section>
        <section class="main__buttons">
            <button class="main__buttons--play">
                <i class="fa-solid fa-play"></i>
                재생
            </button>
            <button class="main__buttons--info">
                <i class="fa-solid fa-circle-info"></i>
                상세 정보
            </button>
        </section>
    </div>
</main> */}


let posterImg = document.querySelectorAll('.movie__poster img')

// 포스터를 클릭하면 바로 이미지 콘솔에 뜨게끔
posterImg.forEach((img) => {
    img.addEventListener('click', () => {
        console.log(img)
    })
})