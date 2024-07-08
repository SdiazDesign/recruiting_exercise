Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: ['Clients', 'PurchaseOrders', 'PurchaseOrdersDetail'],
    views: ['MainGrid', 'PurchaseOrderWindow'],
    init: function() {
        this.control({
            'maingrid': {
                itemdblclick: this.showPurchaseOrderDetails
            }
        });
    },
    showPurchaseOrderDetails: function(grid, record) {
        var win = Ext.create('MyApp.view.PurchaseOrderWindow', {
            record: record
        });
        win.down('form').loadRecord(record);
        console.log('Id',record.get('Id'))
        var detailStore = win.down('grid').getStore();
        console.log('detailStore',detailStore)
        detailStore.filter('PurchaseOrderId', record.get('Id'));
        detailStore.load();

        win.show();
    }
});
