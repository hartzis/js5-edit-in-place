$(document).on('ready', function() {

    //putting event inside onReady
    $('.editable').on('click', function() {
        inputSwitch(this);
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
        $inputTxt.val($(element).text());
        $(element).parent().append(($inputTxt));
        $(element).hide();
        $inputTxt.focus();
        $('#user-input').blur(function() {
            inputReSwitch(this);
        });
    }

});