import { NowRequest, NowResponse } from '@vercel/node';

export default function myApi(req: NowRequest, res: NowResponse) {
  const { name = 'World' } = req.query;
  res.send(`Hello ${name}!`);
}
