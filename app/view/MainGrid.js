Ext.define('MyApp.view.MainGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'maingrid',
    store: 'PurchaseOrders',
    title: 'Purchase Orders',
    columns: [
        { text: 'ID', dataIndex: 'Id', flex: 1 },
        { text: 'Date', dataIndex: 'Date', flex: 1 },
        { text: 'Status', dataIndex: 'Status', flex: 1 },
        { text: 'Client ID', dataIndex: 'ClientId', flex: 1 },
        { text: 'Total', dataIndex: 'Total', flex: 1 },
        { text: 'Currency', dataIndex: 'Currency', flex: 1 }
    ],
    listeners: {
        headerclick: function(ct, column, e, t) {
            if (!column.hasListener('headerdblclick')) {
                column.addListener('headerdblclick', function() {
                    var store = ct.up('grid').getStore();
                    var values = store.collect(column.dataIndex);
                    console.log(values); // Array of all values in the column
                });
            }

            if (column.dblClickTimer) {
                clearTimeout(column.dblClickTimer);
                column.dblClickTimer = null;
                column.fireEvent('headerdblclick');
            } else {
                column.dblClickTimer = setTimeout(function() {
                    column.dblClickTimer = null;
                }, 300);
            }
        }
    },
    features: [{
        ftype: 'grouping',
        groupHeaderTpl: '{name}',
        enableNoGroups: false,
        enableGroupingMenu: true
    }]
});
