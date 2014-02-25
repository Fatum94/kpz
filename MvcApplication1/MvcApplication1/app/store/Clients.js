Ext.define('TestApp.store.Clients',{
    extend: 'Ext.data.Store',
    autoLoad: true,
    requires: 'TestApp.model.Client',
    model: 'TestApp.model.Client'
});
