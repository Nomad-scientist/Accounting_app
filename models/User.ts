import Sequelize from 'sequelize';

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true
        },
        name: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        provider: {
          type: Sequelize.INTEGER, // 1 - google, 2 - kakao
          allowNull: false
        },
        refresh_token: {
          type: Sequelize.STRING(20),
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
  }
}

module.exports = User;
