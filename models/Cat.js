module.exports = function(sequelize, DataTypes) {
    var Cat = sequelize.define('cat', {
        name:DataTypes.STRING,
        age:DataTypes.INTEGER,
        isCute:DataTypes.BOOLEAN
    });


    return Cat;
};