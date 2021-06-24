const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/indexRoute');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`app has been started ${PORT}`)
        })

    } catch (e) {
        console.log(e);
    }
}

start();