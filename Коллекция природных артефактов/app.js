//slider swiper
const swiper = new Swiper('.swiper', {
        observer: true,
        observeParents: true,
        parallax: true,
        loop:'auto',
        direction: 'horizontal',
        slidesPerView: 4,
        speed: 900,
        spaceBetween: 2,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
            renderBullet: function (index, className) {
                return `<span class="${className}">${index+1}${this.slides.length}</span>`;
            }
        },
    });
//SEND INPUT

const inputName = document.querySelector('.finish__name')
const inputEmail = document.querySelector('.finish__email')
const btnSend = document.querySelector('.btn-send')
const spanName = document.querySelector('.name')
const spanEmail = document.querySelector('.email')

btnSend.onclick = ()=> {
    if (inputName.value == '' || inputEmail.value == '') {
        inputName.style.borderColor = 'red'
        spanName.innerHTML = 'Заполните имя!'
        spanName.style.display = 'block'
        inputEmail.style.borderColor = 'red'
        spanEmail.innerHTML = 'Заполните Email!'
        spanEmail.style.display = 'block'
    }else if(inputName.value !== "" || inputEmail.value !==""){
        alert('Congratulations')
    }
}
