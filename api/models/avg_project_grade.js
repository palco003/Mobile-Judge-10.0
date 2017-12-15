module.exports = function(sequelize, DataTypes) {
    var stats = sequelize.define('avg_project_grade', {
        project: {
            type: DataTypes.STRING,
            get: function()  {
                var project = this.getDataValue('project'),
                    average = this.getDataValue('average');
                return project + ': ' + average;
            }
        },
        average: DataTypes.DECIMAL
    }, {
        timestamps: false,
        tableName: 'avg_project_grade',
        classMethods: {
            associate: function () {
                stats.removeAttribute('id');
            }
        }
    });
    return stats;
};
