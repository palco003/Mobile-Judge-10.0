Ext.define('MobileJudge.view.settings.Index', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.settings',

<<<<<<< HEAD
	//controller: 'settings',
	//viewModel: {
	//	type: 'settings'
	//},
	//title: '',
	//iconCls: '',
=======
	requires: [
		'MobileJudge.view.settings.Controller',
		'MobileJudge.view.settings.Questions',
		'MobileJudge.view.settings.Terms',
		'MobileJudge.view.settings.Model'
	],
	
	controller: 'settings',
	viewModel: {
		type: 'settings'
	},

>>>>>>> e65f0aaa112205e8e78dac4dde988c53f5ebfc0b
	cls: 'shadow',
	activeTab: 0,
	margin: 20,

	items: [
		{
<<<<<<< HEAD
			xtype: 'terms',
			title: 'Terms',
        		iconCls: ''

		},
		{
			xtype: 'questions',
			title: 'Questions',
        		iconCls: ''

		}
	]
});
=======
			xtype: 'terms'
		},
		{
			xtype: 'questions'
		}
	]
});

>>>>>>> e65f0aaa112205e8e78dac4dde988c53f5ebfc0b
