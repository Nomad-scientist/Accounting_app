import Sequelize from 'sequelize';

class Category extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        category: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        type: {
          type: Sequelize.STRING(50),
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Category',
        tableName: 'categorys',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    );
  }
}

module.exports = Category;
