import { Sequelize } from 'sequelize';

// 클래스 import

// db 설정 불러오기
import configs from '../config/config';
const env = process.env.NODE_ENV || 'development';
const config = configs[env];

// MySQL 연결 객체를 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { dialect: 'mysql', host: config.host }
);

// db 객체에 모델 클래스 삽입

// 모델과 테이블 연결

// 모델 간 관계 설정

export default sequelize;
