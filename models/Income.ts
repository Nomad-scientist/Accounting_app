import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';

import sequelize from './';
import User from './User';
import Category from './Category';

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

Income.belongsTo(User, {
  foreignKey: 'user_id',
  //  'sourceKey' does not exist in type 'BelongsToOptions'.
  //sourceKey: 'id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Income.belongsTo(Category, {
  foreignKey: 'category_id',
  //  'sourceKey' does not exist in type 'BelongsToOptions'.
  //sourceKey: 'id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

export default Income;
