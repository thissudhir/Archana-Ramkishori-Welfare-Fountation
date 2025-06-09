const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');
require('dotenv').config();
const transactionRoute = require('./routes/transactionsRoute');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5001;
app.use(errorHandler);
app.use('/v1/api/transactions', transactionRoute);


dbConnect();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})