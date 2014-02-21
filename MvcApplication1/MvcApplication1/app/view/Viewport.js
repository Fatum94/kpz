
Ext.define('TestApp.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: ['TestApp.view.Numbers', 'TestApp.view.MainView'],
    initComponent: function () {
        this.items = [
        
        {
            xtype: 'mainview'
        }
        
        ];

        this.callParent(arguments);

    }

});