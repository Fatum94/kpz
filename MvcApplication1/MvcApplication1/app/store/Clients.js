Ext.define('TestApp.store.Clients',{
    extend: 'Ext.data.Store',
    autoLoad: false,
    requires: 'TestApp.model.Client',
    model: 'TestApp.model.Client'
});
