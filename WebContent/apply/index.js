/*
 * File: designer.js Date: Mon Oct 10 2011 21:21:06 GMT+0800 (SGT)
 * 
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 * 
 * This file will be auto-generated each and everytime you export.
 * 
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
	enabled : true
});
Ext.application({
	name : 'DiskStorageApp',
	stores : [

	],

	addFormField : function(_form) {
		_form.bodyPadding = 5;
		_form.padding = "0px 0px 0px 0px";
		_form.add({

	            xtype: 'fieldcontainer',
	            height: 24,
	            layout: {
	                type: 'column'
	            },
	            fieldLabel: '用车单位',
	            items: [
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                }
	            ]
	        },
	        {
	            xtype: 'fieldcontainer',
	            height: 24,
	            layout: {
	                type: 'column'
	            },
	            fieldLabel: '用车事由',
	            anchor: '100%',
	            items: [
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                }
	            ]
	        },
	        {
	            xtype: 'fieldcontainer',
	            height: 24,
	            layout: {
	                type: 'column'
	            },
	            fieldLabel: '所需车型',
	            anchor: '100%',
	            items: [
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                }
	            ]
	        },
	        {
	            xtype: 'fieldcontainer',
	            height: 24,
	            layout: {
	                type: 'column'
	            },
	            fieldLabel: '用户人',
	            anchor: '100%',
	            items: [
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'combobox',
	                    width: 151,
	                    fieldLabel: '指定情况',
	                    labelWidth: 60
	                },
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                }
	            ]
	        },
	        {
	            xtype: 'fieldcontainer',
	            height: 24,
	            layout: {
	                type: 'column'
	            },
	            fieldLabel: '上车时间',
	            anchor: '100%',
	            items: [
	                {
	                    xtype: 'datefield',
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'timefield',
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'datefield',
	                    width: 151,
	                    fieldLabel: '结束时间',
	                    labelWidth: 60
	                },
	                {
	                    xtype: 'timefield',
	                    fieldLabel: ''
	                }
	            ]
	        },
	        {
	            xtype: 'fieldcontainer',
	            height: 24,
	            layout: {
	                type: 'column'
	            },
	            fieldLabel: '上车地点',
	            anchor: '100%',
	            items: [
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'combobox',
	                    width: 201,
	                    fieldLabel: '上车地点',
	                    labelWidth: 60
	                }
	            ]
	        },
	        {
	            xtype: 'fieldcontainer',
	            height: 24,
	            layout: {
	                type: 'column'
	            },
	            fieldLabel: '途径地',
	            anchor: '100%',
	            items: [
	                {
	                    xtype: 'combobox',
	                    width: 108,
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'combobox',
	                    width: 161,
	                    labelWidth: 60
	                },
	                {
	                    xtype: 'combobox',
	                    width: 161,
	                    labelWidth: 60
	                },
	                {
	                    xtype: 'combobox',
	                    width: 161,
	                    labelWidth: 60
	                }
	            ]
	        },
	        {
	            xtype: 'fieldcontainer',
	            height: 24,
	            layout: {
	                type: 'column'
	            },
	            fieldLabel: '是否往返',
	            anchor: '100%',
	            items: [
	                {
	                    xtype: 'combobox',
	                    fieldLabel: ''
	                },
	                {
	                    xtype: 'combobox',
	                    width: 201,
	                    fieldLabel: '是否出省',
	                    labelWidth: 60
	                }
	            ]
	        },
	        {
	            xtype: 'fieldcontainer',
	            height: 122,
	            layout: {
	                type: 'column'
	            },
	            fieldLabel: '备注',
	            anchor: '100%',
	            items: [
	                {
	                    xtype: 'textareafield',
	                    height: 187,
	                    width: 564,
	                    fieldLabel: ''
	                }
	            ]
	        }	
		


				);

	},

	launch : function() {
		Ext.QuickTips.init();
		var cmp = Ext.create('util.BaseViewport', {
			renderTo : Ext.getBody()

		});
		cmp.initCommonUrl('Apply');
		var me = this;
		var tb = cmp.getComponent('actionToolbar');
		// tb.getComponent('add').setVisible(false);
		// tb.getComponent('del').setVisible(false);
		// tb.getComponent('edit').setVisible(false);

		cmp.beforeAddWin = function getAddedField(_win) {
			_win.setHeight(500);
			_win.setWidth(700);

			var addForm = _win.getComponent('editForm');
			me.addFormField(addForm);
			addForm.doLayout();
			_win.doLayout();

		};

		cmp.beforeEditWin = function getAddedField(_win) {
			_win.setHeight(500);
			_win.setWidth(700);
			var editForm = _win.getComponent('editForm');
			me.addFormField(editForm);
			editForm.doLayout();
		};

	


		// addition button
	

//		cmp.searchUrl = '../services/controller/load';
//		cmp.saveUrl = '../services/controller/save';
//		cmp.editUrl = '../services/controller/save';
//		cmp.delUrl = '../services/controller/del';
//		cmp.getUrl = '../services/controller/get?id=';

		cmp.show();
		cmp.search();

	}
});