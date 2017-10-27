Ext.define('MobileJudge.view.settings.Terms', {
    extend: 'Ext.form.Panel',
    xtype: 'panel',
    alias: 'widget.terms',
    reference: 'termForm',
    modelValidation: true,
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select',
	'Ext.field.Text',
        'Ext.field.Number'
    ],

    items: [{
        xtype: 'fieldset',
        title: 'Select a Term',
        layout: 'vbox',
        items: [{
                xtype: 'selectfield',
                label: 'Select Term',
		labelWidth: 150,
		reference: 'termSelector',
		displayField: 'name',
		valueField: 'id',
                bind: {
                    store: '{terms}',
		    disabled: '{status.canSave}'
                }
            }, {
                xtype: 'button',
                text: 'New',
                iconCls: 'x-fa fa-edit',
                ui: 'action'
            }, {
                xtype: 'button',
                text: 'Save',
                iconCls: 'x-fa fa-save',
                ui: 'confirm'
            }, {
                xtype: 'button',
                text: 'Delete',
                iconCls: 'x-fa fa-remove',
                ui: 'decline'
            }

        ]
    }, {
        xtype: 'fieldset',
        title: 'Selected Term',
        items: [{
                xtype: 'textfield',
                label: 'Name',
		labelWidth: 150,
		bind: '{selectedTerm.name}'
            }, {
                xtype: 'checkboxfield',
                label: 'Is Active?',
                labelWidth: 150

            }, {
                xtype: 'checkboxfield',
                label: 'Judge Login?',
                labelWidth: 150,
		bind: '{selectedTerm.allowJudgeLogin}'
            }, {
                xtype: 'checkboxfield',
                label: 'Stud. Grades?',
                labelWidth: 150,
		bind: '{selectedTerm.showGrades}'
            }, {
                xtype: 'numberfield',
                label: 'Stud. per Judge',
                labelWidth: 150,
		bind: '{selectedTerm.studentsPerJudge}'
            }, {
                xtype: 'numberfield',
                label: 'Display Order',
                labelWidth: 150,
		bind: '{selectedTerm.display}'
            }

        ]
    }, {
        xtype: 'fieldset',
        title: 'Senior Project Website',
        defaultType: 'textfield',
        defaults: {
            labelWidth: 100
        },
        items: [{
            label: 'Url',
	    bind: '{selectedTerm.srProjectUrl}'
        }, {
            label: 'Token',
	    bind: '{selectedTerm.srProjectToken}'
        }, {
            label: 'Live Url',
	    bind: '{selectedTerm.liveUrl}'
        }, {
            label: 'Dev. Url',
	    bind: '{selectedTerm.developmentUrl}'
        }, {
            label: 'No Prof. Img Url',
	    bind: '{selectedTerm.noProfileImageUrl}'
        }]

    }, {
        xtype: 'fieldset',
        title: 'Email Settings',
	defaults: {
		labelWidth: 150
	},
        items: [{
                xtype: 'textfield',
                label: 'From',
                bind: '{selectedTerm.mailFrom}'
            }, {
                xtype: 'selectfield',
                label: 'Reset Pass.',
                displayField: 'name',
		valueField: 'id',
		bind: {
			store: 'templates4Term',
			value: '{selectedTerm.resetPasswordTemplate}'
		}
            }, {
                xtype: 'selectfield',
                label: 'Confirm Reg.',
                displayField: 'name',
                valueField: 'id',
		bind: {
			store: 'templates4Term',
			value: '{selectedTerm.confirmTemplate}'
		}

            }, {
                xtype: 'selectfield',
                label: 'Confirm Acpt.',
		displayField: 'name',
                valueField: 'id',
		bind: {
                        store: 'templates4Term',
                        value: '{selectedTerm.acceptanceConfirmation}'
                }
            }, {
                xtype: 'selectfield',
                label: 'Reject Template',
                displayField: 'name',
                valueField: 'id',
		bind: {
			store: 'templates4Term',
			value: '{selectedTerm.rejectInviteTemplate}'       
		}
            }, {
                xtype: 'selectfield',
                label: 'Acpt. Template',
                displayField: 'name',
                valueField: 'id',
		bind: {
                        store: 'templates4Term',
                        value: '{selectedTerm.acceptInviteTemplate}'
                }

            }, {
                xtype: 'selectfield',
                label: 'Remv. Template',
                displayField: 'name',
                valueField: 'id',
		bind: {
			store: 'templates4Term',
			value: '{selectedTerm.removeInviteTemplate}'
		}
            }

        ]
    }, {
        xtype: 'fieldset',
        title: 'Event Info',
        layout: 'vbox',
        defaultType: 'textfield',
	defaults: {
	    labelWidth: 150
	},
        items: [{
            label: 'Start Date'
        }, {
            label: 'Start Time'
        }, {
            label: 'End Date'
        }, {
            label: 'End Time'
        }, {
            label: 'Deadline Date'
        }, {
            label: 'Deadline Time'
        }, {
            label: 'Place'
        }, {
            label: 'Map Url'
        }]
    }]

});

