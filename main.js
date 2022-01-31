const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false,


    navigation: {
        nextEl: '#swiper-button-next',
        prevEl: '#swiper-button-prev',
    },

    slidesPerView:5,
});




let items = [
    {
        id: '1',
        name: 'Eddie Harris',
        img: './img/userCard.png',
        class: 'blue',
    },
    {
        id: '2',
        name: 'Odell Hane',
        img: './img/userCard.png',
        class: 'red',
    },
    {
        id: '3',
        name: 'Eddie Harris',
        img: './img/userCard.png',
        class: 'green',
    },
    {
        id: '4',
        name: 'Eddie Harris',
        img: './img/userCard.png',
        class: 'blue',
    },
    {
        id: '5',
        name: 'Eddie Harris',
        img: './img/userCard.png',
        class: 'blue',
    },
    {
        id: '6',
        name: 'Eddie Harris',
        img: './img/userCard.png',
        class: 'blue',
    },
    {
        id: '7',
        name: 'Eddie Harris',
        img: './img/userCard.png',
        class: 'blue',
    },
    {
        id: '8',
        name: 'Eddie Harris',
        img: './img/userCard.png',
        class: 'blue',
    },
]


let wrapSwipper = document.querySelector('.swiper-wrapper')
function displayItems() {
   for(item of items) {
        console.log(item)
        let div = document.createElement('div')
        div.classList.add('swiper-slide')
        div.innerHTML = `
                    <div class="sellers-card">
                        <div class="sellers-card_top">
                            <div class="sellers-card__badge ${item.class}">
                                <img src="./svg/LineCup.png" alt="cup">
                                <h3 class="sellers-card__order">#${item.id}</h3>
                            </div>
                            <div class="sellers-card__icon_top">
                                <img src="./svg/LinePlus.png" alt="add">
                                <img src="./svg/vectorUp(Stroke).png" alt="up">
                            </div>

                        </div>
                            <hr class="sellers-card__line">
                            <img src="${item.img}" alt="cover">
                            <h1 class="sellers-card__user__name">${item.name}</h1>
                            <p class="sellers-card__user__level">2.456 <span>ETH</span></p>
                    </div>
        `
        wrapSwipper.appendChild(div)

    }
}

displayItems()

const swiper2 = new Swiper(".swiper2" ,{
    direction: 'horizontal',
    loop: false,


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView:4,
});

let a = [
    {
        img: "./img/0101.png"
    },
    {
        img: "./img/0101.png"
    },
    {
        img: "./img/0101.png"
    },
    {
        img: "./img/0101.png"
    },
    {
        img: "./img/0101.png"
    },
    {
        img: "./img/0101.png"
    }

]
let swiperSilade = document.querySelector(".hot-bid__swiper");
function hotBidSilader() {
    for(item of a){
        console.log(item)
        let divs = document.createElement("div")
        divs.classList.add("bid-silader")
        divs.innerHTML= `
                            <div class="hot-bid-card">
                                <div class="hot-bid-card__hover">
    
                                <div class="hot-bid-card__hover_top">
                                    <button class="hot-bid-card__purchasing__btn">PURCHASING! </button>
                                    <button class="hot-bid-card__liked__btn"><img src="./svg/ShapeHeart.png" alt=""></button>
                                </div>
                                <button class="hot-bid-card__bid__btn">Place a bid <span><img src="./svg/LineBid.png" alt=""></span></button>
                    
                            </div>
                            <img class="hot-bid-card__img" src="${item.img}" alt="art">
                            <div class="hot-bid-card__info">
                                <h1 class="hot-bid-card__name">Amazing digital art</h1>
                                <div class="prise__box">2.45 ETH</div>
                            </div>
                            <div class="hot-bid-card__wievs">
                                <div class="hot-bid-card__wievs__user">
                                    <img src="./img/avatars.png" alt="cover">
                                </div>
                                <h3 class="hot-bid-card__wievs__number">3 in stock</h3>
                            </div>
                            <hr class="hot-bid-card__line">
                            <div class="hot-bid-card__footer">
                                <div class="hot-bid__footer_left">
                                    <img class="hot-bid-card__footer__icon" src="./svg/Line000.png" alt="icon">
                                    <h1 class="hot-bid-card__footer__price">
                                        <span class="hot-bid-card__footer__text_secondary">Highest bid</span>
                                        0.001 ETH
                                    </h1>
                                </div>
                                <p class="hot-bid-card__footer__bind_new">New bid 🔥</p>
                            </div>
                        </div>
        `
        swiperSilade.appendChild(divs)
    }

}
hotBidSilader()