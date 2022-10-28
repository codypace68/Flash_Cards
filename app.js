const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index.js');

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'public')));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}.`);
})