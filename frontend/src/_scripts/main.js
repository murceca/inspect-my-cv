'use strict';

import $ from 'jquery';
import Carousel from '../_modules/step-guide/step-guide';

$(() => {
  const carousel = new Carousel();
  carousel.init();

  $( "#contact-us" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
  });
});
