Ext.application({
    name: 'MyApp',
    appFolder: 'app',
    controllers: ['Main'],
    launch: function() {
        Ext.create('MyApp.view.Viewport');
    }
});