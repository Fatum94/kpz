Ext.define('TestApp.model.Client', {
    extend: 'Ext.data.Model',
    fields: ['Id', 'ClientName', 'Room.Id', 'Room.BusyTime', 'Room.Floor'],
    proxy: {
        type: 'ajax',
        url: 'api/client',
        reader: {
            type: 'json'
        }
    }
});