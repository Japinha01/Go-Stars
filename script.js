let currentIndexResults = 0;
let currentIndexCalendar = 0;

function moveCarousel(type, direction) {
    const items = document.querySelectorAll(`#${type} .carousel-item`);
    const totalItems = items.length;

    if (type === 'resultados') {
        currentIndexResults += direction;
        if (currentIndexResults < 0) {
            currentIndexResults = totalItems - 1;
        } else if (currentIndexResults >= totalItems) {
            currentIndexResults = 0;
        }
        updateCarousel('#resultados', items, currentIndexResults);
    } else if (type === 'calendario') {
        currentIndexCalendar += direction;
        if (currentIndexCalendar < 0) {
            currentIndexCalendar = totalItems - 1;
        } else if (currentIndexCalendar >= totalItems) {
            currentIndexCalendar = 0;
        }
        updateCarousel('#calendario', items, currentIndexCalendar);
    }
}

function updateCarousel(carouselId, items, index) {
    const carouselContent = document.querySelector(carouselId + ' .carousel-content');
    const offset = -index * 100; // 100% para cada item
    carouselContent.style.transform = 'translateX(' + offset + '%)';
}
