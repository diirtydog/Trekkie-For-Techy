const express = require('express');
const routes = reqiure('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlbars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequalize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUnintialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlbars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then (() => {
    app.listen(PORT, () => console.log('Now listening Cat Daddy!'));
});