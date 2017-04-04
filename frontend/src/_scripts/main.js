'use strict';

import $ from 'jquery';
import Carousel from '../_modules/step-guide/step-guide';
import initContactForm from '../_modules/contact-us-form/contact-us-form';
import initInspectForm from '../_modules/inspect-cv-form/inspect-cv-form';

$(() => {
  const carousel = new Carousel();
  carousel.init();
  initContactForm();
  initInspectForm();
});
