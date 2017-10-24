Ext.define('MobileJudge.view.settings.Terms', {
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

});

