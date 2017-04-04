'use strict';

import sweetAlert from 'sweetalert';

const initForm = () => {
  $('.form-inspect').on('submit', function (event) {
    event.preventDefault();
    const $form = $(this);
    $.ajax({
      url: '/api/inspect_cv',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        email: $form.find('#email-input').val(),
        accept_terms: $form.find('#checkbox-inspect').is(':checked'),
        message: $form.find('#message-area').val()
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
