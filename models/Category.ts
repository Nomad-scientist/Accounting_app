import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';

import sequelize from './';
import Income from './Income';
import Expense from './Expense';

class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {}
Category.init(
  {
    category: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: false,
    modelName: 'Category',
    tableName: 'categories',
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }
);

Category.hasOne(Income, {
  foreignKey: 'category_id',
  sourceKey: 'id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Category.hasOne(Expense, {
  foreignKey: 'category_id',
  sourceKey: 'id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

export default Category;
