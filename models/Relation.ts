import Sequelize from 'sequelize';

class Relation extends Sequelize.Model {
  static associate(db) {
    db.User.hasMany(db.Income, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    db.Income.belongsTo(db.User, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    db.User.hasMany(db.Expenses, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    db.Expenses.belongsTo(db.User, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    db.Category.hasOne(db.Income, {
      foreignKey: 'category_id',
      sourceKey: 'id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    db.Income.belongsTo(db.Category, {
      foreignKey: 'category_id',
      sourceKey: 'id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    db.Category.hasOne(db.Expenses, {
      foreignKey: 'category_id',
      sourceKey: 'id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    db.Expenses.belongsTo(db.Category, {
      foreignKey: 'category_id',
      sourceKey: 'id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  }
}

module.exports = Relation;
