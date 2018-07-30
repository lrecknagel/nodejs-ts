import { Request, Response, Router } from 'express';
import { getConnection } from 'typeorm';
import { Item } from '../entity/Item';

const router = Router();

async function _getAllItems() {
  try {
    const connection = await getConnection();
    const allItems = await connection.manager.find(Item);
    return allItems.sort( ({id: aid}, {id: bid}) => aid > bid ? 1 : aid === bid ? 0 : -1)
  } catch (error) {
    throw error;
  }
}

router.get('/', async (req: Request, res: Response) => {
  try {
    return res.json(await _getAllItems());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: String(error) });
  }
});

router.get('/insert', async (req: Request, res: Response) => {
  try {
    const connection = await getConnection();

    const item = new Item();

    // if given (as its the PK) .save will trigger a upsert
    // item.id = 1;

    item.name = 'Food 001';
    item.packaging = 'ROL';
    item.inventory = 1.0;
    console.log(await connection.manager.save(item));

    return res.json(await _getAllItems());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: String(error) });
  }
});

router.get('/update', async (req: Request, res: Response) => {
  try {
    const connection = await getConnection();

    const item = await connection.manager.findOne(Item, 1);
    item.packaging = 'BOT';
    await connection.manager.save(item);

    return res.json(await _getAllItems());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: String(error) });
  }
});

router.get('/delete/:id', async (req: Request, res: Response) => {
  try {
    const connection = await getConnection();

    const { id } = req.params;

    await connection.manager.delete(Item, id);

    return res.json(await _getAllItems());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: String(error) });
  }
});

export default router;
export { _getAllItems }
