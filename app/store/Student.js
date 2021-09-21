Ext.define('Learn.store.Student', {
    extend: 'Ext.data.Store',

    alias: 'store.student',

    model: 'Learn.model.Student',

    /*
    Uncomment to use a specific model class
    model: 'User',
    */
    /*
    Fields can also be declared without a model class:
    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName',  type: 'string'},
        {name: 'age',       type: 'int'},
        {name: 'eyeColor',  type: 'string'}
    ]
    */
   
   // Uncomment to specify data inline
    data : { items:[
        {name: 'Edward',age: 24,gender: 'male',username: 'Ed', alive: true},
        {name: 'Jannee',age: 26,gender: 'Female',username: 'JJ', alive:true},
        {name: 'Doe',age: 21,gender: 'male',username: 'MJ', alive:true},
        {name: 'You',age: 22,gender: 'male',username: 'ERT', alive: true},
        {name: 'Jeff',age: 44,gender: 'male',username: 'GB', alive: true},
        {name: 'Maxine',age: 27,gender: 'Female',username: 'POI', alive: true},
        {name: 'MIke',age: 29,gender: 'male',username: 'QW', alive: true },


    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
    
});