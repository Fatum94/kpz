Ext.define('TestApp.view.ClientsView', {
    extend: 'Ext.window.Window',
    alias: 'widget.clientsview',
    title: 'Клієнти',
    modal: true,
    height: 600,
    width: 800,
    layout: 'fit',
    autoShow: true,
    items: [{
        xtype: 'grid',
        store: 'Clients',
        columns: [
                { header: 'ПІП', dataIndex: 'ClientName', flex: 1 },
                { header: 'Номер кімнати', dataIndex: 'RoomId', flex: 1 }
            ]
    }]
});