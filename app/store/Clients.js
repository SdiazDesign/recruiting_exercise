Ext.define('MyApp.store.Clients', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.Client',
    proxy: {
        type: 'rest',
        url: 'data/clients.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    autoLoad: true
});
