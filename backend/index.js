const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');
require('dotenv').config();


const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001;

dbConnect();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})