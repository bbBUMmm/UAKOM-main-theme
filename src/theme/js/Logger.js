module.exports = function () {
    return {
        debug: function (message) {
            if (process.env.NODE_ENV !== 'production') {
                for (let i = 0; i < arguments.length; i++) {
                    console.debug(arguments[i]);
                }
            }
        },
        info: function (message) {
            if (process.env.NODE_ENV !== 'production') {
                console.info(message);
            }
        },
        warn: function (message) {
            if (process.env.NODE_ENV !== 'production') {
                console.warn(message);
            }
        },
        error: function (message) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(message);
            }
        }
    }
}();