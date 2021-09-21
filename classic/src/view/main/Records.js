Ext.define('Learn.view.main.records', {
    extend: 'Ext.Container',
    extend: 'Ext.grid.Panel',

    xtype: 'student-records',

    requires:[
        'Learn.model.Student',
    ],
    
    title:'Student',

    store:{
        type:'student'
    },
    
    // Uncomment to give this component an xtype 
    // xtype : 'learn-records', 
    
    columns: [
        {text:'Name', dataIndex:'name'},
        {text:'Age',dataIndex:'age',flex: 1},
        {text:'Gender',dataIndex: 'gender',flex: 1},
        {text:'User Name',dataIndex:'username',flex: 1},
        {text:'Status', dataIndex:'alive',flex:1},
 
        /*  include child components here */
    ]
    
});