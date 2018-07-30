import { Request, Response, Router } from 'express';
import { getConnection } from 'typeorm';
import { Cart } from '../entity/Cart';
import { Item } from '../entity/Item';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const connection = await getConnection();
    const all_ = await connection.manager.find(Cart);
    return res.json(all_);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: String(error) });
  }
});

router.get('/insert', async (req: Request, res: Response) => {
  try {
    const connection = await getConnection();

    const cart = new Cart();
    cart.name = 'Cart 01';
    cart.numOfItems = 2;

    const items = await connection.manager.findByIds(Item, [1, 2]);
    cart.items = [items[0], items[1]];

    await connection.manager.save(cart);

    const all_ = await connection.manager.find(Cart);

    return res.json(all_);
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

    const allItems = await connection.manager.find(Item);

    return res.json(allItems);
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

    const allItems = await connection.manager.find(Item);
    return res.json(allItems);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: String(error) });
  }
});

export default router;
