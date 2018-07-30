import { Request, Response, Router } from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Listings } from '../entity/Listings';

const router = Router();

router.get('/', async (req: Request, res: Response) => {

  const connection = await createConnection();
  const listing = new Listings();
  listing.name = 'Food 001';
  listing.packaging = 'ROL';
  listing.inventory = 1.0;
  await connection.manager.save(listing);

  const allListings = await connection.manager.find(Listings);
  console.log(allListings);

  return res.json(allListings);
});

export default router;