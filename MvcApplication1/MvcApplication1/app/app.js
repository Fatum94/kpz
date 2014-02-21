Ext.application({
    name: 'TestApp',
    autoCreateViewport: true,
    models: ['User'],
    stores: ['Users'],
    controllers: ['Users']
});