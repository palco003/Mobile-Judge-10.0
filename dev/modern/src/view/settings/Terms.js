Ext.define('MobileJudge.view.settings.Terms', {
<<<<<<< HEAD
    extend: 'Ext.form.Panel',
    alias: 'widget.terms',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.field.Number'

    ],

    items: [
        {
            xtype: 'fieldset',
            title: 'Select a Term',
            layout: 'vbox',
            items: [{
                xtype: 'selectfield',
                label: 'Select Term',
                options: [{
                    text: 'Fall 2017',
                    value: 'first'
                }, {
                    text: 'Second Option',
                    value: 'second'
                }, {
                    text: 'Third Option',
                    value: 'third'
                }]
            },
                {
                    xtype: 'button',
                    text: 'New',
                    iconCls: 'x-fa fa-edit',
                    ui: 'action'
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    iconCls: 'x-fa fa-save',
                    ui: 'confirm'
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    iconCls: 'x-fa fa-remove',
                    ui: 'decline'
                }

            ]
        },
        {
            xtype: 'fieldset',
            title: 'Selected Term',
            items: [
                {
                    xtype: 'textfield',
                    label: 'Name'
                },
                {
                    xtype: 'checkboxfield',
                    label: 'Is Active?'

                },
                {
                    xtype: 'checkboxfield',
                    label: 'Judge Login?'
                },
                {
                    xtype: 'checkboxfield',
                    label: 'Stud. Grades?'
                },
                {
                    xtype: 'numberfield',
                    label: 'Stud. per Judge'
                },
                {
                    xtype: 'numberfield',
                    label: 'Display Order'
                }


            ]
        },
        {
            xtype: 'fieldset',
            title: 'Senior Project Website',
            items: [
                {
                    xtype: 'textfield',
                    label: 'Url'
                },
                {
                    xtype: 'textfield',
                    label: 'Token'
                },
                {
                    xtype: 'textfield',
                    label: 'Live Url'
                },
                {
                    xtype: 'textfield',
                    label: 'Dev. Url'
                },
                {
                    xtype: 'textfield',
                    label: 'No Prof. Img Url'
                }
            ]

        },
        {
            xtype: 'fieldset',
            title: 'Email Settings',
            items: [
                {
                    xtype: 'textfield',
                    label: 'From'
                    //placeHolder: 'Masoud Sadjadi <sadjadi@cs.fiu.edu>'
                },
                {
                    xtype: 'selectfield',
                    label: 'Reset Pass.',
                    options: [
                        {
                            text: 'Forgot Password'
                            //value:
                        }

                    ]
                },
                {
                    xtype: 'selectfield',
                    label: 'Confirm Reg.',
                    options: [
                        {
                            text: 'Registration Confirmation for Judges'
                            //value:
                        }

                    ]
                },
                {
                    xtype: 'selectfield',
                    label: 'Confirm Reg.',
                    options: [
                        {
                            text: 'Acceptance Confirmation for Judges'
                            //value:
                        }

                    ]
                },
                {
                    xtype: 'selectfield',
                    label: 'Reject Template',
                    options: [
                        {
                            text: 'Judge Reject Invite'
                            //value:
                        }

                    ]
                },
                {
                    xtype: 'selectfield',
                    label: 'Acpt. Template',
                    options: [
                        {
                            text: 'Judge Accept Invite'
                            //value:
                        }

                    ]
                },
                {
                    xtype: 'selectfield',
                    label: 'Remv. Template',
                    options: [
                        {
                            text: 'Judge Remove Invite'
                            //value:
                        }

                    ]
                }

            ]
        },
        {
            xtype: 'fieldset',
            title: 'Event Info',
            layout: 'vbox',
            defaultType: 'textfield',
            items: [
                {
                    label : 'Start Date'
                },
                {
                    label: 'Start Time'
                },
                {
                    label : 'End Date'
                },
                {
                    label: 'End Time'
                },
                {
                    label : 'Deadline Date'
                },
                {
                    label: 'Deadline Time'
                },
                {
                    label: 'Place'
                },
                {
                    label: 'Map Url'
                }
            ]
        }
    ]
=======
	extend: 'Ext.form.Panel',
	alias: 'widget.terms',

	requires: [
		'Ext.field.Select',
		'Ext.form.FieldSet',
		'Ext.field.Number',
		'Ext.field.DatePicker',
		'Ext.field.Text',
		'MobileJudge.store.settings.Terms'
	],


	title: 'Terms',
	reference: 'termForm',
	iconCls: 'x-fa fa-calendar',
	cls: 'term-editor',

	layout: 'fit',

	bodyPadding: 10,
	scrollable: true,

	modelValidation: true,

	defaultType: 'fieldset',
	defaults: {
		anchor: '100%',
		layout: 'fit',
		labelAlign: 'top',
		labelSeparator: '',
		userCls: 'groupFieldContainer',
		defaultType: 'textfield',
		defaults: {
			anchor: '100%',
			labelAlign: 'left',
			labelSeparator: '',
			labelWidth: 160
		}
	},

	toolbar: [
		{
			xtype: 'selectfield',
			docked: 'top',
			reference: 'termSelector',
			fieldLabel: 'Select Term',
			emptyText: '-- Create New Term --',
			labelWidth: 80,
			queryMode: 'local',
			forceSelection: true,
			editable: false,
			displayField: 'name',
			valueField: 'id',
			flex: 1,
			bind: {
				store: '{terms}',
				disabled: '{status.canSave}'
			}
		},
		{
			ui: 'soft-blue',
			glyph:'',
			iconCls: 'x-fa fa-edit',
			text: 'New',
			bind: {
				disabled: '{!status.canCreate}'
			},
			handler: 'onNewTermClick'
		},
		{
			ui: 'soft-green',
			glyph:'',
			iconCls: 'x-fa fa-save',
			text: 'Save',
			bind: {
				disabled: '{!status.canSave}'
			},
			handler: 'onSaveTermClick'
		},
		{
			ui: 'soft-red',
			glyph:'',
			iconCls: 'x-fa fa-remove',
			text: 'Delete',
			bind: {
				disabled: '{!status.canDelete}'
			},
			handler: 'onDeleteTermClick'
		}
	],

	items: [
		{
			labelClsExtra: 'x-fa fa-gear',
			fieldLabel: 'Selected Term',
			items: [
				{
					fieldLabel: 'Name',
					bind: '{selectedTerm.name}'
				},
				{
					fieldLabel: 'Is Active?',
					xtype: 'fieldset',
					layout: 'hbox',
					userCls: 'dateFieldContainer',
					items:[
						{
							xtype: 'selectfield',
							readOnly: true,
							bind: '{selectedTerm.active}'
						},
						{
							xtype: 'button',
							text: 'Make Active',
							iconCls: 'x-fa fa-calendar-check-o',
							margin: '0 0 0 20',
							handler: 'onMakeActiveTerm',
							bind: {
								hidden: '{selectedTerm.active}',
								disabled: '{status.canSave}'
							}
						}
					]
				},
				{
					xtype: 'checkboxfield',
					fieldLabel: 'Allow Judges to Login?',
					bind: '{selectedTerm.allowJudgeLogin}'
				},
				{
					xtype: 'checkboxfield',
					fieldLabel: 'Students Can See Grades?',
					bind: '{selectedTerm.showGrades}'
				},
				{
					xtype: 'numberfield',
					fieldLabel: 'Students per Judge',
					bind: '{selectedTerm.studentsPerJudge}'
				},
				{
					xtype: 'numberfield',
					fieldLabel: 'Display Order',
					bind: '{selectedTerm.display}'
				}
			]
		},
		{
			labelClsExtra: 'x-fa fa-globe',
			fieldLabel: 'Senior Project Website',
			items: [
				{
					fieldLabel: 'Url',
					bind: '{selectedTerm.srProjectUrl}'
				},
				{
					fieldLabel: 'Token',
					bind: '{selectedTerm.srProjectToken}'
				},
				{
					fieldLabel: 'Live Url',
					bind: '{selectedTerm.liveUrl}'
				},
				{
					fieldLabel: 'Development Url',
					bind: '{selectedTerm.developmentUrl}'
				},
				{
					fieldLabel: 'No Profile Image Url',
					bind: '{selectedTerm.noProfileImageUrl}'
				}
			]
		},
		{
			labelClsExtra: 'x-fa fa-envelope-o',
			fieldLabel: 'Email Settings',
			items: [
				{
					fieldLabel: 'From',
					emptyText: 'John Doe <username@example.com>',
					bind: '{selectedTerm.mailFrom}'
				},
				{
					xtype: 'selectfield',
					queryMode: 'local',
					editable: false,
					emptyText: 'Select a Template',
					displayField: 'name',
					valueField: 'id',
					fieldLabel: 'Reset Password',
					bind: {
						store: 'templates4Term',
						value: '{selectedTerm.resetPasswordTemplate}'
					}
				},
				{
					xtype: 'selectfield',
					queryMode: 'local',
					editable: false,
					emptyText: 'Select a Template',
					displayField: 'name',
					valueField: 'id',
					fieldLabel: 'Confirm Registration',
					bind: {
						store: 'templates4Term',
						value: '{selectedTerm.confirmTemplate}'
					}
				},
				{
					xtype: 'selectfield',
					queryMode: 'local',
					editable: false,
					emptyText: 'Select a Template',
					displayField: 'name',
					valueField: 'id',
					fieldLabel: 'Reject Template',
					bind: {
						store: 'templates4Term',
						value: '{selectedTerm.rejectInviteTemplate}'
					}
				},
				{
					xtype: 'selectfield',
					queryMode: 'local',
					editable: false,
					emptyText: 'Select a Template',
					displayField: 'name',
					valueField: 'id',
					fieldLabel: 'Remove Template',
					bind: {
						store: 'templates4Term',
						value: '{selectedTerm.removeInviteTemplate}'
					}
				}
			]
		},
		{
			labelClsExtra: 'x-fa fa-clock-o',
			fieldLabel: 'Event Info',
			items: [
				{
					fieldLabel: 'Start Time',
					xtype: 'fieldset',
					layout: 'hbox',
					userCls: 'dateFieldContainer',
					items:[
						{
							xtype: 'datepickerfield',
							flex: 1,
							bind: '{selectedTerm.startDate}'
						},
						{
							xtype: 'textfield',
							flex: 1,
							bind: '{selectedTerm.startTime}'
						}
					]
				},
				{
					fieldLabel: 'End Time',
					xtype: 'fieldset',
					layout: 'hbox',
					userCls: 'dateFieldContainer',
					items:[
						{
							xtype: 'datepickerfield',
							flex: 1,
							bind: '{selectedTerm.endDate}'
						},
						{
							xtype: 'textfield',
							flex: 1,
							bind: '{selectedTerm.endTime}'
						}
					]
				},
				{
					fieldLabel: 'Deadline',
					xtype: 'fieldset',
					layout: 'hbox',
					userCls: 'dateFieldContainer',
					items:[
						{
							xtype: 'datepickerfield',
							flex: 1,
							bind: '{selectedTerm.deadlineDate}'
						},
						{
							xtype: 'textfield',
							flex: 1,
							bind: '{selectedTerm.deadlineTime}'
						}
					]
				},
				{
					fieldLabel: 'Place',
					bind: '{selectedTerm.location}'
				},
				{
					fieldLabel: 'Map Url',
					bind: '{selectedTerm.mapImageUrl}'
				}
			]
		}
	]
>>>>>>> e65f0aaa112205e8e78dac4dde988c53f5ebfc0b

});

