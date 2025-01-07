const returnFalseResponse = (req, res, statusCode, message, arr, errorCode) => {
    return res.status(statusCode).json({
        version: {
            current_version: process.env.APP_VERSION,
            major_update: 0,
            minor_update: 0,
            message: "App is Up to Date"
        },
        success: 0,
        message: message,
        data: arr,
        errorCode: errorCode
    })
};

let helper = {
    returnFalseResponse: returnFalseResponse
};

export default helper;