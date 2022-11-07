module.exports = ({ env }) => ({
    url: env('MY_SERVICE_URL'),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS")
    }
});