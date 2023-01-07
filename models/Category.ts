import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';

import sequelize from './';

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

export default Category;
