import * as express from 'express';
import routes from './routes';
import './db/index';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
