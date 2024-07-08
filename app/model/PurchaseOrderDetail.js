Ext.define('MyApp.model.PurchaseOrderDetail', {
    extend: 'Ext.data.Model',
    fields: ['Id', 'PurchaseOrderId', 'ProductDesc', 'Quantity', 'Price'],
    belongsTo: 'MyApp.model.PurchaseOrder',
    proxy: {
        type: 'rest',
        url: '/data/purchase_order_detail.json',
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});
