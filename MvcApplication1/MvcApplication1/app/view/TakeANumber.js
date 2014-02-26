Ext.define('TestApp.view.TakeANumber', {
    extend: 'Ext.window.Window',
    alias: 'widget.takenumber',
    title: 'Book this Number',
    modal: true,
    autoShow: true,
    items: [
        {
            xtype: 'form',
            bodyStyle: 'padding: 10px',
            items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Імя та прізвище клієнта:',
                allowBlank: false,
                name: 'ClientName'
            }, {
                xtype: 'datefield',
                allowBlank: false,
                fieldLabel: 'До:',
                name: 'BusyTime'
            },
            {
                xtype: 'button',
                text: 'Зайняти',
                margin: '20',
                handler: function () {
                    var butt = this,
                        view = this.up('takenumber');
                    if (this.up('form').isValid()) {
                        this.up('form').getForm().submit({
                            url: 'api/values/' + view.record.get('Id'),
                            method: 'PUT',
                            success: function () {
                                butt.up('window').close();
                                Ext.getCmp('freeNumbers').store.load();
                            },
                            failure: function () {
                                butt.up('window').close();
                                var freeNumbersView = Ext.getCmp('freeNumbers');
                                freeNumbersView.store.load(function () {
                                    if (freeNumbersView.store.data.items.length == 0) {
                                        view.parentView.close();
                                    }
                                });

                            }
                        });
                    }
                }
            }
    ]
        }]
});