$(document).on('ready', function() {

});

var $inputTxt = $('<input>', {
    type: 'text',
    class: 'user-input'
})

$('.editable').on('click', function() {
    $(this).append($inputTxt);
});