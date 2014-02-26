Ext.define('TestApp.view.EditClientInfoView', {
    extend: 'Ext.window.Window',
    alias: 'widget.editclientinfo',
    autoShow: true,
    modal: true,
    initComponent: function () {
        var me = this,
        form = Ext.create('Ext.form.Panel', {
            bodyStyle: 'padding: 10px',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Імя та прізвище клієнта:',
                    name: 'ClientName'
                }, {
                    xtype: 'radio',
                    fieldLabel: 'Продовжити',
                    name: 'change',
                    inputValue: 'continue',
                    listeners: {
                        change: function (newValue, oldValue, eOpts) {
                            if (oldValue) {
                                var form = me.down('form').getForm();
                                form.findField('Room.BusyTime').setDisabled(false);
                                form.findField('Room.Floor').setDisabled(true);
                            }
                        }
                    }
                }, {
                    xtype: 'radio',
                    fieldLabel: 'Переселити',
                    name: 'change',
                    inputValue: 'relocate',
                    listeners: {
                        change: function (newValue, oldValue, eOpts) {
                            if (oldValue) {
                                var form = me.down('form').getForm();
                                form.findField('Room.BusyTime').setDisabled(true);
                                form.findField('Room.Floor').setDisabled(false);
                            }
                        }
                    }

                }, {
                    xtype: 'datefield',
                    fieldLabel: 'Продовжити До:',
                    disabled: true,
                    name: 'Room.BusyTime'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Переселити на ... поверх:',
                    name: 'Room.Floor',
                    disabled: true
                }, {
                    xtype: 'button',
                    text: 'Змінити',
                    margin: '20',
                    handler: function () {
                        var butt = this,
                            view = this.up('editclientinfo');
                        this.up('form').getForm().submit({
                            url: 'api/client/' + me.record.get('Room.Id'),
                            method: 'PUT',
                            success: function () {
                                butt.up('window').close();
                                Ext.getCmp('freeNumbers').store.load();
                            },
                            failure: function () {
                                butt.up('window').close();
                                Ext.data.StoreManager.lookup('Clients').load();
                            }
                        });
                    }
                }, {
                    xtype: 'button',
                    text: 'Виселити',
                    margin: '20',
                    handler: function () {
                        var butt = this,
                            view = this.up('editclientinfo');
                        this.up('form').getForm().submit({
                            url: 'api/client/' + me.record.get('Id'),
                            method: 'DELETE',
                            success: function () {
                                butt.up('window').close();
                                Ext.getCmp('freeNumbers').store.load();
                            },
                            failure: function () {
                                butt.up('window').close();
                                Ext.data.StoreManager.lookup('Clients').load();
                            }
                        });
                    }
                }
            ]
        });
        form.loadRecord(this.record);
        this.items = [form];
        this.callParent();
    }
});