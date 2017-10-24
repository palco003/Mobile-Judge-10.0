<<<<<<< HEAD
var store = Ext.create('Ext.data.Store', {
    fields: ['name', 'email', 'phone'],
    data: [
        { 'id': '16', 'text': 'How significant is the problem?', 'value': '10', 'display': '1', 'enabled': '✔', 'bool': 'x'  },
        { 'id': '17', 'text': 'How significant is the solution?', 'value': '10', 'display': '2', 'enabled': '✔', 'bool': 'x'  },
        { 'id': '18', 'text': 'How impressive is the demo?', 'value': '10', 'display': '3', 'enabled': '✔', 'bool': 'x'  },
        { 'id': '19', 'text': 'How well prepared is the student?', 'value': '10', 'display': '4', 'enabled': '✔', 'bool': 'x'  },
        { 'id': '20', 'text': 'How expressive and self-sustained is the poster?', 'value': '10', 'display': '4', 'enabled': '✔', 'bool': 'x'  }
    ]
});

Ext.define('MobileJudge.view.settings.Questions', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.questions',
    title: 'Questions',

    store: store,

    columns: [
        { text: '',  dataIndex: 'id', width: '10' },
        { text: 'Question', dataIndex: 'text', width: '250' },
        { text: 'Max', dataIndex: 'value', width: '45' },
        { text: 'Order', dataIndex: 'display', width: '55'},
        { text: 'Enabled', dataIndex: 'enabled', width: '70'},
        { text: '', dataIndex: 'bool', width: '20'}
    ],

    height: 200,
    layout: 'fit',
    fullscreen: true
});
=======
Ext.define('MobileJudge.view.settings.Questions', {
	extend: 'Ext.grid.Grid',
	alias: 'widget.questions',

	requires: [
        'Ext.grid.column.Column',
        'Ext.grid.plugin.Editable',
	'Ext.field.Text',
        'Ext.field.Number'
	],

	title: 'Questions',
	iconCls: 'x-fa fa-question',

	bind: '{questions}',

	viewConfig: {
		preserveScrollOnRefresh: true,
		preserveScrollOnReload: true,
		loadMask: false
	},

	headerBorders: false,
	rowLines: false,
	plugins: [
		{
			ptype: 'grideditable',
			pluginId: 'gridEditor',
			listeners: {
				cancelEdit: 'onQuestionCancelEdit'
			}
		}
	],
	tbar: [
		// Default item type for toolbar is button, thus we can skip it's definition in
		// the array items
		{
			iconCls: 'x-fa fa-edit',
			reference: 'newButton',
			tooltip: 'New',
			handler: 'onNewQuestionButtonClick'
		},
		{
			iconCls: 'x-fa fa-refresh',
			tooltip: 'Refresh',
			handler: 'onRefreshButtonClick'
		}
	],
	columns: [
		{
			width: 40,
			dataIndex: 'id',
			text: '',
			renderer: function(v, meta, rec) {
				return rec.phantom ? '' : v;
			}
		},
		{
			flex: 1,
			dataIndex: 'text',
			text: 'Question',
			editor: {
				xtype: 'textfield',
				allowBlank: false
			}
		},
		{
			width: 75,
			align: 'center',
			dataIndex: 'value',
			text: 'Max',
			editor: {
				xtype: 'numberfield',
				minValue: 1,
				maxValue: 10,
				allowBlank: false
			}
		},
		{
			width: 75,
			align: 'center',
			dataIndex: 'display',
			text: 'Order',
			editor: {
				xtype: 'numberfield',
				minValue: 1,
				allowBlank: false
			}
		},
		{
			width: 75,
			align: 'center',
			dataIndex: 'enabled',
			text: 'Enabled',
			renderer: function(value) {
				return '<span class="x-fa '+ (value ? 'fa-check' : '') +'"></span>';
			},
			editor: 'checkboxfield'
		},
		{
			xtype: 'column',
			items: [
				{
					iconCls: 'x-fa fa-close',
					tooltip: 'Delete',
					handler: 'onQuestionDelete'
				}
			],

			width: 30,
			dataIndex: 'bool',
			sortable: false,
			hideable: false
		}
	]
});

>>>>>>> e65f0aaa112205e8e78dac4dde988c53f5ebfc0b
