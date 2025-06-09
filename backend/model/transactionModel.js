const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: [true, 'Transaction must have an amount'],
        },
        currency: {
            type: String,
            default: 'INR',
            enum: ['INR', 'USD', 'EUR', 'GBP'],
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'failed', 'refunded'],
            default: 'pending',
        },
        paymentMethod: {
            type: String,
            required: [true, 'Transaction must have a payment method'],
            enum: ['card', 'upi', 'netbanking', 'wallet'],
        },
        // donor: {
        //     type: mongoose.Schema.ObjectId,
        //     // ref: 'User',
        //     required: [true, 'Transaction must belong to a donor'],
        // },
        paymentId: String,
        orderId: String,
        receipt: String,
    },
    {
        timestamps: { currentTime: () => new Date().toLocaleString('en-us', { timeZone: 'Asia/Kolkata', hour12: true }) },
        versionKey: false,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;