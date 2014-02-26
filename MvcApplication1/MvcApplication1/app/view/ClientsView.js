Ext.define('TestApp.view.ClientsView', {
    extend: 'Ext.window.Window',
    alias: 'widget.clientsview',
    title: 'Клієнти',
    modal: true,
    width: 800,
    layout: 'fit',
    autoShow: true,
    items: [{
        xtype: 'grid',
        store: 'Clients',
        columns: [
                { header: 'ПІП', dataIndex: 'ClientName', flex: 1 },
                { header: 'Номер кімнати', dataIndex: 'Room.Id', flex: 1 },
                { header: 'Поверх', dataIndex: 'Room.Floor', flex: 1 },
                { header: 'В номері до', dataIndex: 'Room.BusyTime', flex: 1 }
            ]
    }],
    initComponent: function () {
        Ext.data.StoreManager.lookup('Clients').load();
        this.callParent();
    }
});