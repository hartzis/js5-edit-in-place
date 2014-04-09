$(document).on('ready', function() {

});

var $inputTxt = $('<input>', {
    type: 'text',
    id: 'user-input'
})


var inputSwitch = function(element) {
    if ($(element).attr('id') === 'user-input') {
        $(element).parent().children('.editable').text($(element).val());
        $(element).parent().children('.editable').css('display', 'block');
        $(element).css('display', 'none');

    } else {
        console.log($(element).parent());
        console.dir($(element).parent());
        $inputTxt.val($(element).text());
        $(element).parent().append(($inputTxt));
        $inputTxt.css('display', 'inline-block');
        $(element).css('display', 'none');
        $inputTxt.focus();
    }
}

$('.editable').on('click', function() {
    inputSwitch(this);
});

$inputTxt.focusout(function() {
    inputSwitch(this);
    // $(this).parent().children('.editable').text($(this).val());
});