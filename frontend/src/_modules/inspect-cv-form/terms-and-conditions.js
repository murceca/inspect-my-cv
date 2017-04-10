'use strict';

const initTerms = () => {
  const $modalTerms = $('#modal-terms');
  $modalTerms.find('.modal-terms-agree').on('click', (event) => {
    event.preventDefault();
    $('#checkbox-inspect').prop('checked', true);
    $modalTerms.modal('hide');
  });
};

module.exports = initTerms;
