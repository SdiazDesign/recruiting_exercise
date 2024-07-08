Ext.define('MyApp.store.PurchaseOrdersDetail', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.PurchaseOrderDetail',
    proxy: {
        type: 'rest',
        url: 'data/purchase_order_detail.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    autoLoad: true
});
