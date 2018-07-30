import * as bodyParser from 'body-parser';
import * as express from 'express';
import defaultRoutes from './routes/defaults';
import listingsRoutes from './routes/listings';

const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', defaultRoutes);
app.use('/list', listingsRoutes);

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});