module.exports = function (sequelize, DataTypes) {
    const Quotes = sequelize.define("Quotes", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
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
  
      category: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Quotes;
  };