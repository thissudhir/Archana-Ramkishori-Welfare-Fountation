const express = require('express');
const transactionController = require('../controllers/transactionController');
// const authController = require('../controllers/authController');

const router = express.Router();

// router.use(authController.protect);

router
    .route('/')
    .get(transactionController.getAllTransactions)
    .post(transactionController.createTransaction);

router.get('/stats', transactionController.getTransactionStats);
router.get('/monthly/:year', transactionController.getMonthlyTransactions);

router
    .route('/:id')
    .get(transactionController.getTransaction)
    .patch(transactionController.updateTransactionStatus);

module.exports = router;