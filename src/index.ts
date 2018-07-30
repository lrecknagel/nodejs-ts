import * as bodyParser from 'body-parser';
import * as express from 'express';

import defaultRoutes from './routes/defaults';
import itemRoutes from './routes/items';
import cartRoutes from './routes/carts';

import initializeDBConnection from './initializeDBConnection';
initializeDBConnection();

const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', defaultRoutes);
app.use('/items', itemRoutes);
app.use('/carts', cartRoutes);

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});