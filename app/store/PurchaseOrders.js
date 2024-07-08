Ext.define('MyApp.store.PurchaseOrders', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.PurchaseOrder',
    proxy: {
        type: 'rest',
        url: 'data/purchase_orders.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    autoLoad: true
});
