const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    // Development error response
    const devError = () => {
        return res.status(statusCode).json({
            status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    };

    // Production error response
    const prodError = () => {
        // Operational, trusted error: send message to client
        if (err.isOperational) {
            return res.status(statusCode).json({
                status,
                message: err.message
            });
        }
        // Programming or other unknown error: don't leak error details
        console.error('ERROR 💥', err);
        return res.status(500).json({
            status: 'error',
            message: 'Something went wrong!'
        });
    };

    if (process.env.NODE_ENV === 'development') {
        devError();
    } else {
        prodError();
    }
};

module.exports = errorHandler;