Ext.define('TestApp.store.Users',{
    extend: 'Ext.data.Store',
    config: {
                model: 'TestApp.model.User',
                storeId: 'userstore'
            },
    autoLoad: true,
    requires: 'TestApp.model.User',
    model: 'TestApp.model.User',
});
