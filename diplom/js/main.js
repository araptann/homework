(function () {

    document.addEventListener('click', navInit)

    function navInit(e) {
        const target = e.target
        const navIcon = e.target.closest('.header__nav-icon')
        const navLink = e.target.closest('.nav__link')

        if (!navIcon && !navLink) return
        if (document.documentElement.clientWidth > 1000) return

        if (navIcon) {
            e.preventDefault()
        }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }


    }


    // =====================================================================
    let startX;
    let currentIndex = 0;

    const slider = document.querySelector('.trend-slider');
    const items = document.querySelectorAll('.trends__heading-item');


    const itemWidth = items[0].offsetWidth;


    function moveSlider(direction) {
        currentIndex += direction;


        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex > items.length - 1) {
            currentIndex = items.length - 1;
        }

        slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }


    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }


    function handleTouchMove(event) {
        const moveX = event.touches[0].clientX;
        const diffX = startX - moveX;


        if (Math.abs(diffX) > 100) {
            if (diffX > 0) {

                moveSlider(1);
            } else {

                moveSlider(-1);
            }
            startX = moveX;
        }
    }


    function setupTouchEvents() {
        if (window.innerWidth <= 600) {
            slider.addEventListener('touchstart', handleTouchStart);
            slider.addEventListener('touchmove', handleTouchMove);
        } else {

            slider.removeEventListener('touchstart', handleTouchStart);
            slider.removeEventListener('touchmove', handleTouchMove);
        }
    }


    setupTouchEvents();


    window.addEventListener('resize', setupTouchEvents);




    new Swiper('.trends__slider', {

        spaceBetween: 32,
        slidesPerView: 1.1,
        centeredSlides: true,

        breakpoints: {
            301: {
                slidesPerView: 1,
                spaceBetween: 32,
            },
            401: {
                slidesPerView: 1,
                spaceBetween: 13,
            },

            501: {
                slidesPerView: 1,
                spaceBetween: 32,
            },

            701: {
                slidesPerView: 3,
                spaceBetween: 13,
            },

            801: {
                slidesPerView: 3,
                spaceBetween: 32,
            },

            1001: {
                slidesPerView: 3,
                spaceBetween: 32,
            },

            1101: {
                slidesPerView: 4,
                spaceBetween: 32,
            },

            1201: {
                slidesPerView: 4,
                spaceBetween: 32,
            },

            1301: {
                slidesPerView: 4,
                spaceBetween: 32,
            },

            1401: {
                slidesPerView: 5,
                spaceBetween: 32,
            }
        }

    });


    const slides = document.querySelectorAll('.advantage__content-item');
    const paginationContainer = document.querySelector('.slider-pagination');
    let activeIndex = 0;

    // Создание пагинации
    function createPagination() {
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('pagination-dot');
            dot.addEventListener('click', () => {
                activeIndex = index; // Устанавливаем активный индекс
                updateSlider();
                updatePagination(); // Обновляем пагинацию
            });
            paginationContainer.appendChild(dot);
        });
    }

    // Обновление слайдера
    function updateSlider() {
        const offset = -activeIndex * 100; // Каждый элемент занимает 100% ширины
        document.querySelector('.advantage__content-info').style.transform = `translateX(${offset}%)`;
        updatePagination(); // Обновляем пагинацию при смене слайда
    }

    // Обновление пагинации
    function updatePagination() {
        const dots = document.querySelectorAll('.pagination-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    // Функция для перехода к следующему элементу
    function nextSlide() {
        activeIndex = (activeIndex + 1) % slides.length; // Зацикливаемся на начале
        updateSlider();
    }

    // Функция для перехода к предыдущему элементу
    function prevSlide() {
        activeIndex = (activeIndex - 1 + slides.length) % slides.length; // Зацикливаемся на конце
        updateSlider();
    }

    // Обработчики событий для сенсорного управления
    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector('.advantage__content-info').addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX; // Запоминаем начальную позицию касания
    });

    document.querySelector('.advantage__content-info').addEventListener('touchmove', (event) => {
        touchEndX = event.touches[0].clientX; // Запоминаем конечную позицию касания
    });

    document.querySelector('.advantage__content-info').addEventListener('touchend', () => {
        if (touchStartX > touchEndX + 50) {
            nextSlide(); // Переключаем на следующий слайд
        } else if (touchStartX < touchEndX - 50) {
            prevSlide(); // Переключаем на предыдущий слайд
        }
    });

    // Начальная настройка
    createPagination(); // Создаем пагинацию
    updateSlider(); // Обновляем слайдер

    // Событие изменения размера для обработки изменений вьюпорта
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1400) {
            activeIndex = 0;
            updateSlider();
        }
    });


    new Swiper('.testimonials__slider', {

        spaceBetween: 30,
        slidesPerView: 2.5,
        centeredSlides: true,


        pagination: {
            el: '.swiper-pagination',
        },

        breakpoints: {

            301: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            401: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            501: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            601: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            701: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },

            801: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },

            901: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },

            1001: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },

            1301: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            }
        }



    });

    // =========================

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

})()