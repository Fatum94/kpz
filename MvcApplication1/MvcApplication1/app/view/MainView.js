Ext.define('TestApp.view.MainView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainview',
    title: 'Hotel',
    width: 400,
    height: 200,
    style: 'margin: 0 auto;',
    items: [
        {
            xtype: 'button',
            text: 'Вільні місця',
            margin: '15',
            handler: function() {
                this.up('mainview').fireEvent('getFreePlaces');
            }
        }, {
            xtype: 'button',
            text: 'Додати нову кімнату',
            margin: '15',
            handler: function() {
                this.up('mainview').fireEvent('addNewRoom');
            }
        }, {
            xtype: 'button',
            text: 'Поточні клієнти',
            margin: '15',
            handler: function () {
                this.up('mainview').fireEvent('showClients');
            }
        }
    ],
    initComponent: function () {
        var store = Ext.data.StoreManager.lookup('Users');
        store.clearFilter();
        store.load({ params: { limit: 5, start: 0} });
        this.callParent();
    }
});