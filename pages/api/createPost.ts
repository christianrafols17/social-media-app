import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Handle the logic for creating a new post here.
    // You can access request data using req.body and interact with your database.
    // Respond with appropriate status codes and data.
    res.status(201).json({ message: 'Post created successfully' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
