$(function() {
    
    var btns = document.querySelectorAll('.mdc-button');
    for (var i = 0, btn; btn = btns[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btn);
    }
    
    var btns = document.querySelectorAll('.mdc-list-item');
    for (var i = 0, btn; btn = btns[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btn);
    }
    
//    const dialogs = [].map.call(document.querySelectorAll('.mdc-dialog'), function(el) {
//        return new MDCDialog(el);
//    });
    
    //textfield
    var textFields = document.querySelectorAll('.mdc-text-field')
    for (var i = 0, textField; textField = textFields[i]; i++) {
        mdc.textField.MDCTextField.attachTo(textField);
    }
    
    const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
    document.querySelector('.litu-orcamento--btn').addEventListener('click', function (evt) {
        dialog.open();
    })
    dialog.listen('MDCDialog:opened', () => {
//        textField.layout();
    });
    
});