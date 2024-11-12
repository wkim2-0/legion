require('dotenv').config();

async function getData(apiHost) {
    const apiHost = process.env.API_HOST;
    const apiKey = process.env.API_KEY;
    try {
        const response = await fetch(apiHost);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
}

getData().then(data => {
    console.log("Полученные данные:", data)
})


// Адаптив страницы с 1200 по 800
function scalePage() {
    // Устанавливаем базовую ширину макета
    const baseWidth = 1200;
    
    // Текушая ширина окна
    const windowWidth = window.innerWidth;

    if (windowWidth >= 800 && windowWidth <= 1200) {
        // Рассчитываем коэффициенты масштабирования по ширине и высоте
        const scaleX = windowWidth / baseWidth;
    
        // Применяем масштабирование к body
        document.body.style.transform = `scale(${scaleX})`;
    } else {
        document.body.style.transform = '';
    }
}
  
// Масштабируем при загрузке страницы
scalePage();

// Перемасштабирование при изменении размеров окна
window.addEventListener('resize', scalePage);

if (window.innerWidth <= 520) {
    const swiper = new Swiper('.header__mob .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 4,
        freeMode: true,
        slidesOffsetBefore: 8,
    });
} 


// Menu popup
const menu = document.querySelector('.popup-menu');
const overlay = document.querySelector('.overlay');


document.querySelector('.header__hamburger').addEventListener('click', () => {
    menuPopupActive();
})

overlay.addEventListener('click', () => {
    menuPopupRemove();
})

function menuPopupActive() {
    menu.classList.add('popup-menu_active');
    overlay.classList.add('overlay_active');
    document.body.style.overflow = 'hidden';
}

function menuPopupRemove() {
    menu.classList.remove('popup-menu_active');
    overlay.classList.remove('overlay_active');
    document.body.style.overflow = '';
}


// Filter
document.querySelector('.filter__picker_all').addEventListener('click', () => {
    document.querySelectorAll('.filter__main li').forEach((item) => {
        item.querySelector('input').checked = true;
    })
})

// 