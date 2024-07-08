Ext.define('MyApp.model.PurchaseOrder', {
    extend: 'Ext.data.Model',
    fields: ['Id', 'Date', 'Status', 'ClientId', 'Total', 'Currency'],
    hasOne: {
        model: 'MyApp.model.Client',
        name: 'client'
    },
    hasMany: {
        model: 'MyApp.model.PurchaseOrderDetail',
        name: 'details'
    },
    proxy: {
        type: 'rest',
        url: '/data/purchase_orders.json',
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});