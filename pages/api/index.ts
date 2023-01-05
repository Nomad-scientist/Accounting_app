// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../models';

db.sequelize
  .sync()
  .then(() => {
    console.log('DB 연결 성공');
  })
  .catch((err: any) => {
    console.error(err);
  });

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}
