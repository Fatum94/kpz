Ext.define('TestApp.model.Client', {
    extend: 'Ext.data.Model',
    fields: ['Id', 'ClientName', 'RoomId'],
    proxy: {
        type: 'ajax',
        url: 'api/client',
        reader: {
            type: 'json'
        }
    }
});