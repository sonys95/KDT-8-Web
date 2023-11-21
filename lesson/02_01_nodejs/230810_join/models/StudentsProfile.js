const { DataTypes } = require("sequelize");
const studeProfileModel = (Sequelize) => {
  const StudentProfile = Sequelize.define("StudentProfile", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    major: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    enroll: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return StudentProfile;
};
module.exports = studeProfileModel;
