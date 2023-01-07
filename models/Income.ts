import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';

import sequelize from './';

class Income extends Model<
  InferAttributes<Income>,
  InferCreationAttributes<Income>
> {}

Income.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_used: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE(6),
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: false,
    modelName: 'Income',
    tableName: 'incomes',
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }
);

export default Income;
