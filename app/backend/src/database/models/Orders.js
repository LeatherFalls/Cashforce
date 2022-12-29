module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    'Orders',
    {
      orderNfId: DataTypes.STRING,
      orderNumber: DataTypes.STRING,
      orderPath: DataTypes.STRING,
      orderFileName: DataTypes.STRING,
      orderOriginalName: DataTypes.STRING,
      emissionDate: DataTypes.STRING,
      pdfFile: DataTypes.STRING,
      emitedTo: DataTypes.STRING,
      nNf: DataTypes.STRING,
      CTE: DataTypes.STRING,
      value: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cnpjId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      buyerId: DataTypes.INTEGER,
      providerId: DataTypes.INTEGER,
      orderStatusBuyer: DataTypes.STRING,
      orderStatusProvider: DataTypes.STRING,
      deliveryReceipt: DataTypes.STRING,
      cargoPackingList: DataTypes.STRING,
      deliveryCtrc: DataTypes.STRING,
    },
    {
      tableName: 'orders',
    },
  );

  Orders.associate = (models) => {
    Orders.belongsTo(models.Cnpjs, {
      foreignKey: 'cnpjId',
      as: 'cnpj',
    });
    Orders.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    });
    Orders.belongsTo(models.Buyers, {
      foreignKey: 'buyerId',
      as: 'buyer',
    });
    Orders.belongsTo(models.Providers, {
      foreignKey: 'providerId',
      as: 'provider',
    });
  };

  return Orders;
};
