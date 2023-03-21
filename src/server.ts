import App from '@/app';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';
import GoogleRoute from './routes/google.route';

validateEnv();

const app = new App([
    new IndexRoute('/'),
    new GoogleRoute('/gapis')
]);

app.listen();
