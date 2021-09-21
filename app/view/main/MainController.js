/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Learn.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init:function () {
        this.control({
            '#btnController':{
                click:'callOnClick'
            }
        })   
    },
    callOnClick:function () {
        alert("Hello from call controller");
        
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
