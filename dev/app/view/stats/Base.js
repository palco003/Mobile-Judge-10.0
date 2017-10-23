Ext.define('MobileJudge.view.stats.Base', {
	extend: 'Ext.Panel',
    xtype: 'column-basic-3d',
    requires: ['Ext.chart.theme.Muted'],
    controller: 'column-basic-3d',

    width: 650,
    height: 500,

    items: {
        xtype: 'cartesian',
        reference: 'chart',
        theme: {
            type: 'muted'
        },
        store: {
            type: 'statsProjects'
        },
        insetPadding: '40 40 40 20',
        animation: Ext.isIE8 ? false : {
            easing: 'backOut',
            duration: 500
        },
        axes: [{
            type: 'numeric3d',
            position: 'left',
            fields: 'grade',
            maximum: 50,
            majorTickSteps: 5,
            label: {
                textAlign: 'right'
            },
            renderer: 'onAxisLabelRender',
            title: 'Grade by Project',
            grid: {
                odd: {
                    fillStyle: 'rgba(255, 255, 255, 0.06)'
                },
                even: {
                    fillStyle: 'rgba(0, 0, 0, 0.03)'
                }
            }
        }, {
            type: 'category3d',
            position: 'bottom',
            fields: 'project',
            grid: true
        }],
        series: [{
            type: 'bar3d',
            xField: 'project',
            yField: 'grade',
            style: {
                minGapWidth: 20
            },
            highlightCfg: {
                saturationFactor: 1.5
            },
            label: {
                field: 'grade',
                display: 'insideEnd',
                renderer: 'onSeriesLabelRender'
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onTooltipRender'
            }
        }],
        sprites: [{
            type: 'text',
            text: 'Current Grades',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }]
    }
});
