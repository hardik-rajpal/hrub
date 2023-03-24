import App from '@/app';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';
import GoogleRoute from './routes/google.route';
import UtilsRoute from './routes/utils.route';

validateEnv();

const app = new App([
    new IndexRoute('/'),
    new GoogleRoute('/gapis'),
    new UtilsRoute('/utils')
]);

app.listen();
