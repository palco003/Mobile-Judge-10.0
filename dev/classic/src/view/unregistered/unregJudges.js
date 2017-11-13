Ext.create('Ext.data.Store', {
	storeId: 'unregjudges',
	listeners: {
		load : function() {
			var grid = Ext.getCmp("unregjudges");
		}
	},
	fields: ['id','fullName','email'],
	data:[]
});

Ext.define('MobileJudge.view.unregistered.unregJudges', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.unregjudges',
	store: 'unregjudges',

	requires: [
		'Ext.grid.plugin.RowEditing',
		'Ext.grid.column.Action',
		'Ext.form.field.Checkbox',
		'Ext.form.field.Number',
		'Ext.form.field.Text',
		'Ext.toolbar.Toolbar',
		'Ext.window.Window'
	],

	listeners: {
		cellclick: 'onTap'
	},

	bind: '{unregjudges}',

dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'dataview',
					cls: 'stateSelector',
					id: 'filterbtn2',
					loadMask: false,
					trackOver: false,
					itemSelector: '.stateSelector button',
					selectedItemCls: 'selected',
					hidden: true,
					selectionModel: {
						type: 'dataviewmodel',
						storeId: 'unregjudges',
						mode: 'SIMPLE'
					},
					tpl: [
						'<tpl for=".">',
							'<button type="button" title="{name}" id="{name}">{abbr}</button>',
						'</tpl>'
					],
					bind: {
						selection: '{judgeFilterSelection}',
						store: '{judgeStates}'
					},
					listeners: {
						selectionchange: 'onFilterChange'
					}
				},
				'->',
			]
		},
		{
			xtype: 'pagingtoolbar',
			dock: 'bottom',
			displayInfo: true,
			bind: '{unregjudges}'
		}
	],

	columns: [
		{
			xtype: 'gridcolumn',
			dataIndex: 'id',
			text: '',
			flex: 1,
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'fullName',
			text: 'Name',
			flex: 1,	
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'email',
			text: 'Email',
			flex: 2,
		},
	]
});