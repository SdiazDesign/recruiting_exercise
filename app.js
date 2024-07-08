Ext.application({
    name: 'MyApp',
    appFolder: 'app',

    controllers: ['Main'],

    launch: function() {
        Ext.create('MyApp.view.MainGrid', {
            renderTo: Ext.getBody(),
            width: '90%',
            height: 600,
            style: {
                margin: '0 auto'  
            }
        });
    }
});
