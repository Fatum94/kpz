Ext.define('TestApp.view.Numbers', {
    extend: 'Ext.window.Window',
    alias: 'widget.numbers',
    title: 'Вільні номери',
    modal: true,
    width: 800,
    layout: 'fit',
    autoShow: true,
    items: [{
        xtype: 'grid',
        id: 'freeNumbers',
        store: 'Users',
        columns: [
                { header: 'Номер кімнати', dataIndex: 'Id', flex: 1 },
                { header: 'Кількість Місць', dataIndex: 'CountOfPlaces', flex: 1 },
                { header: 'Поверх', dataIndex: 'Floor', flex: 1 }
            ]
    }],
    initComponent: function () {
        Ext.data.StoreManager.lookup('Users').load();
        Ext.data.StoreManager.lookup('Users').filter({ property: 'IsFree', value: true });
        this.callParent();
    }
});