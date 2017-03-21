const showStepItem = ($carousel, activeItem) => {
    $carousel.find('.step-guide-item').addClass('hidden');
    $carousel.find(`.step-guide-item:nth-child(${activeItem})`).removeClass('hidden');
};

$(document).ready(function() {
    var activeItem = 1;
    var $carousel = $('.step-guide-carousel');
    var itemsCount = $carousel.find('.step-guide-item').length;
    $carousel.find('.chevron-left a').on('click', function (event) {
        event.preventDefault();
        if (activeItem !== 1) {
            activeItem = activeItem - 1;
            showStepItem($carousel, activeItem);
        }
    });
    $carousel.find('.chevron-right a').on('click', function (event) {
        event.preventDefault();
        if (activeItem != itemsCount) {
            activeItem = activeItem + 1;
            showStepItem($carousel, activeItem);
        }
    });
});
