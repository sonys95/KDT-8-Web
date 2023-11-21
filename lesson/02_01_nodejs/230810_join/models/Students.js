const { DataTypes } = require("sequelize");

const StudentModel = (sequelize) => {
  const Student = sequelize.define("Student", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  });
  return Student;
};

module.exports = StudentModel;
