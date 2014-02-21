Ext.define('TestApp.model.User', {
    extend: 'Ext.data.Model',
    fields: ['Id', 'CountOfPlaces', 'Floor', 'IsFree', { name: 'BusyTime', type: 'boolean' }],
    proxy: {
        type: 'ajax',
        url: 'api/values',
        reader: {
            type: 'json'
        }
    }
});