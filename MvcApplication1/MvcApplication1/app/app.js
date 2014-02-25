Ext.application({
    name: 'TestApp',
    autoCreateViewport: true,
    models: ['User'],
    stores: ['Users', 'Clients'],
    controllers: ['Users']
});