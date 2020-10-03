module.exports = function (sequelize, DataTypes) {
    const Submit = sequelize.define("Submit", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },

      email: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: true,
      },
  
      quote: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
  
      author: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },

      source: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1]
      },
  
      category: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Submit;
  };