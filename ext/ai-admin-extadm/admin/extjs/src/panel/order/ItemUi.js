/*!
 * Copyright (c) Metaways Infosystems GmbH, 2011
 * LGPLv3, http://opensource.org/licenses/LGPL-3.0
 */


Ext.ns('MShop.panel.order');

MShop.panel.order.ItemUi = Ext.extend(MShop.panel.AbstractItemUi, {

    maximized : true,
    layout : 'fit',
    modal : true,
    idProperty : 'id',
    siteidProperty : 'order.siteid',


    initComponent : function() {

        this.title = MShop.I18n.dt('admin', 'Order item details');

        MShop.panel.AbstractItemUi.prototype.setSiteCheck(this);

        this.items = [{
            xtype : 'tabpanel',
            activeTab : 0,
            border : false,
            itemId : 'MShop.panel.order.ItemUi',
            plugins : ['ux.itemregistry'],
            items : [{
                xtype : 'panel',
                title : MShop.I18n.dt('admin', 'Basic'),
                border : false,
                layout : 'hbox',
                layoutConfig : {
                    align : 'stretch'
                },
                itemId : 'MShop.panel.order.ItemUi.BasicPanel',
                plugins : ['ux.itemregistry'],
                defaults : {
                    bodyCssClass : this.readOnlyClass
                },
                items : [{
                    xtype : 'form',
                    title : MShop.I18n.dt('admin', 'Invoice'),
                    flex : 1,
                    ref : '../../mainForm',
                    autoScroll : true,
                    items : [{
                        xtype : 'fieldset',
                        style : 'padding-right: 25px;',
                        border : false,
                        labelAlign : 'left',
                        defaults : {
                            readOnly : this.fieldsReadOnly,
                            anchor : '100%'
                        },
                        items : [{
                            xtype : 'displayfield',
                            fieldLabel : MShop.I18n.dt('admin', 'ID'),
                            name : 'order.id'
                        }, {
                            xtype : 'displayfield',
                            fieldLabel : MShop.I18n.dt('admin', 'Source'),
                            name : 'order.type'
                        }, {
                            xtype : 'datefield',
                            fieldLabel : MShop.I18n.dt('admin', 'Payment date'),
                            name : 'order.datepayment',
                            format : 'Y-m-d H:i:s',
                            emptyText : MShop.I18n.dt('admin', 'YYYY-MM-DD hh:mm:ss (optional)')
                        }, {
                            xtype : 'combo',
                            fieldLabel : MShop.I18n.dt('admin', 'Payment status'),
                            name : 'order.statuspayment',
                            mode : 'local',
                            store : MShop.elements.paymentstatus._store,
                            displayField : 'label',
                            valueField : 'value',
                            triggerAction : 'all',
                            allowBlank : false,
                            typeAhead : true
                        }, {
                            xtype : 'datefield',
                            fieldLabel : MShop.I18n.dt('admin', 'Delivery date'),
                            name : 'order.datedelivery',
                            format : 'Y-m-d H:i:s',
                            emptyText : MShop.I18n.dt('admin', 'YYYY-MM-DD hh:mm:ss (optional)')
                        }, {
                            xtype : 'combo',
                            fieldLabel : MShop.I18n.dt('admin', 'Delivery status'),
                            name : 'order.statusdelivery',
                            mode : 'local',
                            store : MShop.elements.deliverystatus._store,
                            displayField : 'label',
                            valueField : 'value',
                            triggerAction : 'all',
                            allowBlank : false,
                            typeAhead : true
                        }, {
                            xtype : 'displayfield',
                            fieldLabel : MShop.I18n.dt('admin', 'Created'),
                            name : 'order.ctime'
                        }, {
                            xtype : 'displayfield',
                            fieldLabel : MShop.I18n.dt('admin', 'Last modified'),
                            name : 'order.mtime'
                        }, {
                            xtype : 'displayfield',
                            fieldLabel : MShop.I18n.dt('admin', 'Editor'),
                            name : 'order.editor'
                        }]
                    }]
                }]
            }]
        }];

        MShop.panel.order.ItemUi.superclass.initComponent.call(this);
    }
});

Ext.reg('MShop.panel.order.itemui', MShop.panel.order.ItemUi);
