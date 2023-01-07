import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';

import sequelize from '.';
import User from './User';
import Category from './Category';

class Expense extends Model<
  InferAttributes<Expense>,
  InferCreationAttributes<Expense>
> {}

Expense.init(
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
    modelName: 'Expense',
    tableName: 'expenses',
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }
);

Expense.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Expense.belongsTo(Category, {
  foreignKey: 'category_id',
  targetKey: 'id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

export default Expense;
