Ext.define('MyApp.view.PurchaseOrderWindow', {
    extend: 'Ext.window.Window',
    xtype: 'purchaseorderwindow',
    title: 'Purchase Order Details',
    modal: true,
    layout: 'fit',
    width: 500,
    height: 400,
    items: [{
        xtype: 'form',
        bodyPadding: 10,
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [
            { fieldLabel: 'ID', name: 'Id', readOnly: true },
            { fieldLabel: 'Date', name: 'Date' },
            { fieldLabel: 'Status', name: 'Status' },
            { fieldLabel: 'Client ID', name: 'ClientId' },
            { fieldLabel: 'Total', name: 'Total' },
            { fieldLabel: 'Currency', name: 'Currency' },
            {
                xtype: 'grid',
                title: 'Order Details',
                store: Ext.create('Ext.data.Store', {
                    model: 'MyApp.model.PurchaseOrderDetail',
                    proxy: {
                        type: 'ajax',
                        url: 'data/purchase_order_detail.json',
                        reader: {
                            type: 'json',
                            root: 'data'
                        }
                    },
                    autoLoad: false
                }),
                height: 200,
                columns: [
                    { text: 'ID', dataIndex: 'Id', flex: 1 },
                    { text: 'Product Description', dataIndex: 'ProductDesc', flex: 2 },
                    { text: 'Quantity', dataIndex: 'Quantity', flex: 1 },
                    { text: 'Price', dataIndex: 'Price', flex: 1 }
                ]
            }
        ],
        buttons: [{
            text: 'Save',
            handler: function(button) {
                var form = button.up('form').getForm();
                var record = form.getRecord();
                form.updateRecord(record);
                record.save();
                button.up('window').close();
            }
        }, {
            text: 'Cancel',
            handler: function(button) {
                var form = button.up('form').getForm();
                form.loadRecord(form.getRecord()); // Reset to initial values
                button.up('window').close();
            }
        }]
    }]
});
