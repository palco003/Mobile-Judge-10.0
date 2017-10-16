Ext.define('Ext.locale.en.pivot.Grid', {
    override: 'Ext.pivot.Grid',

    textTotalTpl:       'Total ({name})',
    textGrandTotalTpl:  'Grand total'
});
Ext.define('Ext.locale.en.pivot.plugin.RangeEditor', {
    override: 'Ext.pivot.plugin.RangeEditor',

    textWindowTitle:    'Range editor',
    textFieldValue:     'Value',
    textFieldEdit:      'Field',
    textFieldType:      'Type',
    textButtonOk:       'Ok',
    textButtonCancel:   'Cancel',
    textTypePercentage: 'Percentage',
    textTypeIncrement:  'Increment',
    textTypeOverwrite:  'Overwrite',
    textTypeUniformly:  'Uniformly'

});
Ext.define('Ext.locale.en.pivot.plugin.configurator.Column', {
    override: 'Ext.pivot.plugin.configurator.Column',

    sumText:                    'Sum',
    avgText:                    'Avg',
    countText:                  'Count',
    minText:                    'Min',
    maxText:                    'Max',
    groupSumPercentageText:     'Group sum percentage',
    groupCountPercentageText:   'Group count percentage',
    varText:                    'Var',
    varPText:                   'Varp',
    stdDevText:                 'StdDev',
    stdDevPText:                'StdDevp',

    sortAscText:                'Sort A to Z',
    sortDescText:               'Sort Z to A',
    sortClearText:              'Disable sorting',
    clearFilterText:            'Clear filter from "{0}"',
    labelFiltersText:           'Label filters',
    valueFiltersText:           'Value filters',
    equalsText:                 'Equals...',
    doesNotEqualText:           'Does not equal...',
    beginsWithText:             'Begins with...',
    doesNotBeginWithText:       'Does not begin with...',
    endsWithText:               'Ends with...',
    doesNotEndWithText:         'Does not end with...',
    containsText:               'Contains...',
    doesNotContainText:         'Does not contain...',
    greaterThanText:            'Greater than...',
    greaterThanOrEqualToText:   'Greater than or equal to...',
    lessThanText:               'Less than...',
    lessThanOrEqualToText:      'Less than or equal to...',
    betweenText:                'Between...',
    notBetweenText:             'Not between...',
    top10Text:                  'Top 10...',

    equalsLText:                'equals',
    doesNotEqualLText:          'does not equal',
    beginsWithLText:            'begins with',
    doesNotBeginWithLText:      'does not begin with',
    endsWithLText:              'ends with',
    doesNotEndWithLText:        'does not end with',
    containsLText:              'contains',
    doesNotContainLText:        'does not contain',
    greaterThanLText:           'is greater than',
    greaterThanOrEqualToLText:  'is greater than or equal to',
    lessThanLText:              'is less than',
    lessThanOrEqualToLText:     'is less than or equal to',
    betweenLText:               'is between',
    notBetweenLText:            'is not between',
    top10LText:                 'Top 10...',
    topOrderTopText:            'Top',
    topOrderBottomText:         'Bottom',
    topTypeItemsText:           'Items',
    topTypePercentText:         'Percent',
    topTypeSumText:             'Sum'

});
Ext.define('Ext.locale.en.pivot.plugin.configurator.FilterLabelWindow',{
    override: 'Ext.pivot.plugin.configurator.FilterLabelWindow',

    titleText:          'Label filter ({0})',
    fieldText:          'Show items for which the label',
    caseSensitiveText:  'Case sensitive'
});
Ext.define('Ext.locale.en.pivot.plugin.configurator.FilterTopWindow',{
    override: 'Ext.pivot.plugin.configurator.FilterTopWindow',

    titleText:      'Top 10 filter ({0})',
    fieldText:      'Show',
    sortResultsText:'Sort results'
});
Ext.define('Ext.locale.en.pivot.plugin.configurator.FilterValueWindow',{
    override: 'Ext.pivot.plugin.configurator.FilterValueWindow',

    titleText:      'Value filter ({0})',
    fieldText:      'Show items for which'
});
Ext.define('Ext.locale.en.pivot.plugin.configurator.Panel', {
    override: 'Ext.pivot.plugin.configurator.Panel',

    panelAllFieldsText:     'Drop Unused Fields Here',
    panelTopFieldsText:     'Drop Column Fields Here',
    panelLeftFieldsText:    'Drop Row Fields Here',
    panelAggFieldsText:     'Drop Agg Fields Here'

});
