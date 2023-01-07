import Income from './Income';
import Expense from './Expense';
import User from './User';
import Category from './Category';

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
