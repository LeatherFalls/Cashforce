module.exports = (sequelize, DataTypes) => {
  const Offers = sequelize.define(
    'Offers',
    {
      tax: DataTypes.STRING,
      tariff: DataTypes.STRING,
      adValorem: DataTypes.STRING,
      float: DataTypes.STRING,
      iof: DataTypes.STRING,
      expires: DataTypes.DATE,
      paymentStatusSponsor: DataTypes.INTEGER,
      paymentStatusProvider: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      orderId: DataTypes.INTEGER,
      sponsorId: DataTypes.INTEGER,
    },
    {
      tableName: 'offers',
    },
  );

  return Offers;
};
