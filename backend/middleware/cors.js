const c = require('cors');

var corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200 
}

var cors = c(corsOptions);

module.exports = cors;