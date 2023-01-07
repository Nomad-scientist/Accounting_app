// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '../../models';
import User from '../../models/User';

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connect();

async function handler(req: NextApiRequest, res: NextApiResponse<User>) {
  const jane = await User.create({
    email: 'beomjin@test.com',
    name: 'beomjin',
    provider: 1
  });
  res.status(200).json(jane);
}

export default handler;
