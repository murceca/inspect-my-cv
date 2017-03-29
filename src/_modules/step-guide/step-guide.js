'use strict';

import $ from 'jquery';

class Carousel {
  init() {
    this.$carousel = $('.step-guide-carousel');
    this.activeItem = 1;
    this.itemsCount = this.$carousel.find('.step-guide-item').length;
    this.initEvents();
  }

  initEvents() {
    this.$carousel.find('.chevron-left a').on('click', (event) => {
      event.preventDefault();
      if (this.activeItem !== 1) {
        this.activeItem -= 1;
        this.updateStepItem();
      }
    });
    this.$carousel.find('.chevron-right a').on('click', (event) => {
      event.preventDefault();
      if (this.activeItem != this.itemsCount) {
        this.activeItem += 1;
        this.updateStepItem();
      }
    });
  }

  updateStepItem() {
    this.$carousel.find('.step-guide-item').addClass('hidden');
    this.$carousel.find(`.step-guide-item:nth-child(${this.activeItem})`).removeClass('hidden');
  }
}

module.exports = Carousel;
