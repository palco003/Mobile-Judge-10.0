Ext.define('MobileJudge.store.stats.ProjectGrades', {
	extend: 'Ext.data.Store',
	alias: 'store.projectGrades',
	// TODO: get average grade
	fields: ['grade', 'project'],

	autoLoad: true,
	pageSize: 0
});
