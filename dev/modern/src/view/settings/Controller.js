Ext.define('MobileJudge.view.settings.Controller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.settings',

	model: null,

    init: function(view) {
        this.model = view.getViewModel();
    },

    onTermsLoaded: function() {
        var select = this.getReferences().termSelector,
	rec = select.getStore().findRecord('active', true);
        select.setValue(rec.get('id'));
    },

    onNewTermClick: function() {
        var me = this,
	    select = me.getReferences().termSelector,
	    store = me.model.getStore('terms'),
	    now = new Date(),
	    month = now.getMonth(),
	    rec = new MobileJudge.model.settings.Term({
		name: 'New Term',
		start: now,
		end: now,
		deadline: now
	    });

	store.rejectChanges();
	store.insert(0, rec);
	select.setValue(rec);
    },

    onSaveTermClick: function() {
	var me = this,
	    form = me.getReferences().termForm,
	    store = me.model.getStore('terms'),
	    rec = me.model.get('selectedTerm'),
	    changed = false;

	//if (!form.isValid()) return;
	if (rec.modified && rec.modified.active === false && rec.get('active')) changed = rec.get('name');
	store.sync({
	    success: function() {
		if (changed) Ext.GlobalEvents.fireEvent('termChanged', changed);
	    }
	});
    },

    onDeleteTermClick: function() {
		var me = this,
			store = me.model.getStore('terms'),
			rec = me.model.get('selectedTerm');
		Ext.Msg.confirm('Delete', 'Are you sure you want to delete the selected record?',
				function(choice) {
					if (choice !== 'yes') return;
					var sync = !rec.phantom;
					store.remove(rec);
					if (sync) store.sync();
					me.onTermsLoaded(store);
				}, this);
    },

    onMakeActiveTerm: function() {
		var me = this, rec = me.model.get('selectedTerm');
		rec.set('active', true);
		me.onSaveTermClick();
	},
    
});
