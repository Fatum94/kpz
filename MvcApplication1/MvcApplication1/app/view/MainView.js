Ext.define('TestApp.view.MainView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainview',
    title: 'Hotel',
    items: [
        {
            xtype: 'button',
            text: 'Вільні місця',
            handler: function() {
                this.up('mainview').fireEvent('getFreePlaces');
            }
        }, {
            xtype: 'button',
            text: 'Add New Room',
            handler: function() {
                this.up('mainview').fireEvent('addNewRoom');
            }
        }, {
            xtype: 'button',
            text: 'Show Free Rooms',
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