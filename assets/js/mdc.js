$(function() {
    
    //ripple
    var btnRipples = document.querySelectorAll('.mdc-button');
    for (var i = 0, btnRipple; btnRipple = btnRipples[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btnRipple);
    }
    
    var listRipples = document.querySelectorAll('.mdc-list-item');
    for (var i = 0, listRipple; listRipple = listRipples[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(listRipple);
    }
    
    //textfield
    var textFields = document.querySelectorAll('.mdc-text-field');
    for (var i = 0, textField; textField = textFields[i]; i++) {
        mdc.textField.MDCTextField.attachTo(textField);
    }
    
    // dialog
    const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
    let dialogOpen = document.querySelectorAll('.litu-dialog--open');
    dialogOpen.forEach( function (elem) { 
        elem.addEventListener('click', function (evt) {
            dialog.open();
        });
    });
    dialog.listen('MDCDialog:opened', () => {
//        textField.layout();
    });
    
    // topbar
    const topAppBar = new mdc.topAppBar.MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
    
});