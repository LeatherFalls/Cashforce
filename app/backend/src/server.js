require('dotenv').config();
const app = require('./app');

app.listen(3001, () => console.log('ouvindo porta 3001'));
