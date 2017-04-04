'use strict';

import sweetAlert from 'sweetalert';

const initForm = () => {
  $('.contact-us-form').on('submit', function (event) {
    event.preventDefault();
    const $form = $(this);
    $.ajax({
      url: '/api/contact',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        name: $form.find('#contact-us-username').val(),
        email: $form.find('#contact-us-email').val(),
        phone: $form.find('#contact-us-phone').val(),
        message: $form.find('#contact-us-message').val()
      })
    }).done((data) => {
      if (data.success) {
        sweetAlert('Success', 'Your message was sent. Thanks!', 'success');
        $form.trigger('reset');
      } else {
        sweetAlert('Oops...', 'We\'re not able process your request! Please try again later.', 'error');
      }
    });
  });
};

module.exports = initForm;
