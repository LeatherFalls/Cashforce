module.exports = (sequelize, DataTypes) => {
  const Cnpjs = sequelize.define(
    'Cnpjs',
    {
      id: DataTypes.INTEGER,
      cnpj: DataTypes.STRING,
      companyType: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'cnpjs',
    },
  );

  return Cnpjs;
};
