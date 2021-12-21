'use strict';
module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        // userId: {
        //     type: Sequelize.STRING,
        //     primaryKey: true,
        //     autoIncrement: true  
        // },
        FirstName: {
            type: Sequelize.STRING
        },
        MidName: {
            type: Sequelize.STRING
        },
        LastName: {
            type: Sequelize.STRING
        },
        Phn: {
            type: Sequelize.STRING
        },
        Married: {
            type: Sequelize.BOOLEAN
        },
        Address: {
            type: Sequelize.STRING
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Must be a valid email address",
                }
            }
        },
        Gender: {
            type: Sequelize.STRING
        },
        DocumentID: {
            type: Sequelize.STRING
        }
    });

    user.associate = function(models) {
        // associations can be defined here
        user.hasOne(models.Document, {
          foreignKey: 'id',
          as: 'DocumentID',
          onDelete: 'CASCADE',
        });
    };

    return user;
};
