module.exports = (sequelize, DataTypes) => {
  const OrderPortions = sequelize.define(
    'OrderPortions',
    {
      nDup: DataTypes.STRING,
      dVenc: DataTypes.STRING,
      vDup: DataTypes.STRING,
      availableToMarket: DataTypes.INTEGER,
      createdaAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      orderId: DataTypes.INTEGER,
    },
    {
      tableName: 'order_portions',
    },
  );

  return OrderPortions;
};
