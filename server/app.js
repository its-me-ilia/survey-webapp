const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(require('./routes'));
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
    app.use('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    });
};

module.exports = app;