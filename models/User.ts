import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';

import sequelize from './';
import Income from './Income';
import Expense from './Expense';

class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {}

User.init(
  {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    provider: {
      type: DataTypes.INTEGER, // 1 - google, 2 - kakao
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: false,
    modelName: 'User',
    tableName: 'users',
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }
);

User.hasMany(Income, {
  foreignKey: 'user_id',
  sourceKey: 'id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

User.hasMany(Expense, {
  foreignKey: 'user_id',
  sourceKey: 'id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

export default User;
