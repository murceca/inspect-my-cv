'use strict';

const initForm = () => {
  $('#contact-us').on('submit', function (event) {
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
      console.log('done!', data.status);
    });
  });
};

module.exports = initForm;
