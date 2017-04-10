'use strict';

import $ from 'jquery';
import 'bootstrap-sass';
import Carousel from '../_modules/step-guide/step-guide';
import initContactForm from '../_modules/contact-us-form/contact-us-form';
import initInspectForm from '../_modules/inspect-cv-form/inspect-cv-form';
import initTerms from '../_modules/inspect-cv-form/terms-and-conditions'

$(() => {
  const carousel = new Carousel();
  carousel.init();
  initContactForm();
  initInspectForm();
  initTerms();
});
