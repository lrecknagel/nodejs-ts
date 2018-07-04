import * as bodyParser from 'body-parser';
import * as express from 'express';
import defaultRoutes from './routes/defaults';
import userRoutes from './routes/user';

const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', defaultRoutes);
app.use('/user', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});