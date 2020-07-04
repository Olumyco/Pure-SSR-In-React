import express from 'express';
import path from 'path';
import compression from 'compression';
import home from './routes/home';
import about from './routes/about';

const app = express(),
    port = 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use('/', home);
app.use('/about', about);

app.listen(port, () => console.log(`Server running on port ${port}`));