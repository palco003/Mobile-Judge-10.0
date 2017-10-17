Ext.define('MobileJudge.view.settings.Index', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.settings',

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

	cls: 'shadow',
	activeTab: 0,
	margin: 20,

	items: [
		{
			xtype: 'terms'
		},
		{
			xtype: 'questions'
		}
	]
});

