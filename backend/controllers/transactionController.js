const Transaction = require('../model/transactionModel');
// const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// Create new transaction
const createTransaction = catchAsync(async (req, res, next) => {
    const { amount, paymentMethod, currency = 'INR', status = 'pending' } = req.body;

    if (!amount || !paymentMethod) {
        return next(new AppError('Please provide amount and payment method', 400));
    }

    const transaction = await Transaction.create({
        amount,
        paymentMethod,
        currency,
        status,
        // donor: req.user.id,
    });

    res.status(201).json({
        status: 'success',
        data: {
            transaction,
        },
    });
});

// Get all transactions
const getAllTransactions = catchAsync(async (req, res, next) => {
    const transactions = await Transaction.find().populate({
        path: 'donor',
        select: 'name email',
    });

    res.status(200).json({
        status: 'success',
        results: transactions.length,
        data: {
            transactions,
        },
    });
});

// Get single transaction
const getTransaction = catchAsync(async (req, res, next) => {
    const transaction = await Transaction.findById(req.params.id).populate({
        path: 'donor',
        select: 'name email',
    });

    if (!transaction) {
        return next(new AppError('No transaction found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            transaction,
        },
    });
});

// Update transaction status
const updateTransactionStatus = catchAsync(async (req, res, next) => {
    const { status } = req.body;

    if (!status) {
        return next(new AppError('Please provide status to update', 400));
    }

    const transaction = await Transaction.findByIdAndUpdate(
        req.params.id,
        { status },
        {
            new: true,
            runValidators: true,
        }
    );

    if (!transaction) {
        return next(new AppError('No transaction found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            transaction,
        },
    });
});

// Get transaction statistics
const getTransactionStats = catchAsync(async (req, res, next) => {
    const stats = await Transaction.aggregate([
        {
            $match: { status: 'completed' },
        },
        {
            $group: {
                _id: null,
                totalAmount: { $sum: '$amount' },
                numberOfTransactions: { $sum: 1 },
                avgAmount: { $avg: '$amount' },
                minAmount: { $min: '$amount' },
                maxAmount: { $max: '$amount' },
            },
        },
    ]);

    res.status(200).json({
        status: 'success',
        data: {
            stats: stats[0],
        },
    });
});

// Get monthly transaction data
const getMonthlyTransactions = catchAsync(async (req, res, next) => {
    const year = req.params.year * 1;

    const monthly = await Transaction.aggregate([
        {
            $match: {
                status: 'completed',
                createdAt: {
                    $year: year,
                },
            },
        },
        {
            $group: {
                _id: { $month: '$createdAt' },
                totalAmount: { $sum: '$amount' },
                numberOfTransactions: { $sum: 1 },
            },
        },
        {
            $sort: { _id: 1 },
        },
    ]);

    res.status(200).json({
        status: 'success',
        data: {
            monthly,
        },
    });
});

module.exports = {
    createTransaction,
    getAllTransactions,
    getTransaction,
    updateTransactionStatus,
    getTransactionStats,
    getMonthlyTransactions,
};