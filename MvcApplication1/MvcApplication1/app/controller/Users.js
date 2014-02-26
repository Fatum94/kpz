Ext.define('TestApp.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users'],
    views: ['MainView', 'Numbers'],
    init: function () {
        this.control({
            'mainview': {
                'getFreePlaces': this.getFreePlaces,
                'addNewRoom': this.addNewRoom,
                'showClients': this.showClients
            },
            'numbers > grid': {
                itemclick: this.onEmptyNumberClick
            },
            'clientsview > grid': {
                itemclick: this.onClientClick
            }

        });

    },
    getFreePlaces: function () {
        if (Ext.data.StoreManager.lookup('Users').data.items.length === 0) {
            Ext.Msg.show({
                title: 'Sorry',
                msg: 'No free rooms available.',
                icon: Ext.Msg.INFO
            });
        } else {
            Ext.create('TestApp.view.Numbers');
        }
    },
    addNewRoom: function () {
        Ext.create('TestApp.view.AddNewRoom', {});
    },
    showClients: function () {
        Ext.create('TestApp.view.ClientsView', {});
    },
    onEmptyNumberClick: function (grid, record) {
        Ext.create('TestApp.view.TakeANumber', {
            record: record,
            parentView: grid.up('numbers')
        });
    },
    onClientClick: function (grid, record) {
        Ext.create('TestApp.view.EditClientInfoView', {
            record: record,
            parentView: grid.up('clientview')
        });
    }
});