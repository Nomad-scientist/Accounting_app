import { Sequelize } from 'sequelize';

// 클래스 import
import User from './User';
import Income from './Income';
import Expenses from './Expenses';
import Category from './Category';
import Relation from './Relation';

const env = process.env.NODE_ENV || 'development';

// db 설정 불러오기
const config = require('../config/config.json')[env];

const db = {};

// MySQL 연결 객체를 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

// db 객체에 모델 클래스 삽입
db.User = User;
db.Income = Income;
db.Expenses = Expenses;
db.Category = Category;
db.Relation = Relation;

// 모델과 테이블 연결
User.init(sequelize);
Income.init(sequelize);
Expenses.init(sequelize);
Category.init(sequelize);

// 모델 간 관계 설정
Relation.associate(db);

module.exports = db;
