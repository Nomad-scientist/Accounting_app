import Sequelize from 'sequelize';

class Income extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        total_used: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        memo: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        date: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
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
  }
}

module.exports = Income;
