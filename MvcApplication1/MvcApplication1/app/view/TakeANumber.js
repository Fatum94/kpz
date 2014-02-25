Ext.define('TestApp.view.TakeANumber', {
    extend: 'Ext.window.Window',
    alias: 'widget.takenumber',
    title: 'Book this Number',
    autoShow: true,
    items: [
        {
            xtype: 'form',
            items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Імя та прізвище клієнта:',
                name: 'ClientName'
            },{
                xtype: 'datefield',
                fieldLabel: 'До:',
                name: 'BusyTime'
            },
            {
                xtype: 'button',
                text: 'Зайняти',
                handler: function() {
                    var butt = this;
                    this.up('form').getForm().submit({
                        url: 'api/values/' + this.up('takenumber').record.get('Id'),
                        method: 'PUT',
                        success: function() {
                            butt.up('window').close();
                            Ext.getCmp('freeNumbers').store.load();
                        },
                        failure: function() {
                            butt.up('window').close();
                            Ext.data.StoreManager.lookup('Users').load();
                        }
                    });
                }
            }
    ]
    }]
});