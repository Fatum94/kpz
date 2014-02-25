Ext.define('TestApp.view.AddNewRoom', {
    extend: 'Ext.window.Window',
    alias: 'widget.addnewroom',
    title: 'Add New Room',
    autoShow: true,
    modal: true,
    items: [
    {
        xtype: 'form',
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Кількість місць',
                name: 'CountOfPlaces'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Поверх',
                name: 'Floor'
            }, {
                xtype: 'button',
                text: 'Зареєструвати',
                handler: function () {
                    var button = this;
                    this.up('form').getForm().submit({
                        url: 'api/values',
                        method: 'POST',
                        success: function () {
                            button.up('window').close();
                            Ext.data.StoreManager.lookup('Users').load();
                        },
                        failure: function () {
                            button.up('window').close();
                            Ext.data.StoreManager.lookup('Users').load();
                        }
                    });
                }
            }
        ]
    }

    ]
});