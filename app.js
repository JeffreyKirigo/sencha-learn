/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Learn.Application',

    name: 'Learn',

    requires: [
        // This will automatically load all classes in the Learn namespace
        // so that application classes do not need to require each other.
        'Learn.*'
    ],

    // The name of the initial view to create.
    mainView: 'Learn.view.main.Main'
});
