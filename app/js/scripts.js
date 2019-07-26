// Появление и удаление меню по клику

const openButton = document.querySelector('.header-section-nav-menu');
const closeButton = document.querySelector('.header-section-nav-btn');
const headerList = document.querySelector('.header-section-nav-list');

openButton.addEventListener('click', function() {
    headerList.classList.toggle('active');
});

closeButton.addEventListener('click', function() {
    headerList.classList.remove('active');
});

// ------------------------------------------------------------------------------

// Появление кнопки 'Наверх' при скролле страницы на 600 и более px

const scrollUpButton = document.querySelector('.btn-scroll-up');

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 600) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
});

// ------------------------------------------------------------------------------

// Прелоадер загрузки страницы

const preloader = document.querySelector('.preloader-section');

window.addEventListener('load', function() {
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 1000);
});

// ------------------------------------------------------------------------------

// Изменение значения навыков в прогресс баре

const skillPercentElement = document.querySelectorAll('.skills-section-content-block-skill__percent');
const progressBar = document.querySelectorAll('.skills-section-content-block-skill-progress-front');

for (let i = 0; i < skillPercentElement.length; i++) {
    let percentNumber = skillPercentElement[i].getAttribute('data-percent');

    progressBar[i].style.width = percentNumber + '%';

    skillPercentElement[i].innerHTML = percentNumber + ' %';
}

// ------------------------------------------------------------------------------

// Открытие/закрытие модальных окон портфолио

const portfolioItem = document.querySelectorAll('.portfolio-section-content-block-icon__link');

for (let i = 0; i < portfolioItem.length; i++) {
    portfolioItem[i].onclick = function() {
        let itemAttr = portfolioItem[i].getAttribute('href');

        let modalBlock = document.querySelector(itemAttr);

        modalBlock.classList.add('active');

        let modalCloseButton = modalBlock.querySelector('.portfolio-section-modal-btn-close');

        modalCloseButton.addEventListener('click', function() {
            modalBlock.classList.remove('active');
        });
    };
}

// ------------------------------------------------------------------------------