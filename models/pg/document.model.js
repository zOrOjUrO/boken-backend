'use strict';
module.exports = (sequelize, Sequelize) => {
    const doc = sequelize.define("Document", {
        // docID: {
        //     type: Sequelize.STRING,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        AadharUUID: {
            type: Sequelize.STRING,
            unique: true
        }
    });

    // doc.associate = function (model) {
    //     doc.belongsTo(models.User, {
    //         foreignKey: 'id',
    //         as: 'holder'
    //     });

    //     doc.belongsTo(models.Guide, {
    //         foreignKey: 'id',
    //         as: 'holder'
    //     });
    // };

    return doc;
};
