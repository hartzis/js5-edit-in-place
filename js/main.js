$(document).on('ready', function() {

});


var inputReSwitch = function(element) {
    $(element).parent().children('.editable').text($(element).val());
    $(element).parent().children('.editable').show();
    $(element).remove();
}

var inputSwitch = function(element) {

    var $inputTxt = $('<input>', {
        type: 'text',
        id: 'user-input'
    })
    console.log($(element).parent());
    console.dir($(element).parent());
    $inputTxt.val($(element).text());
    $(element).parent().append(($inputTxt));
    $(element).hide();
    $inputTxt.focus();
    $('#user-input').blur(function() {
        inputReSwitch(this);
    });
}

$('.editable').on('click', function() {
    inputSwitch(this);
});