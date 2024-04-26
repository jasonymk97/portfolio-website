const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/blizzard-api',
        createProxyMiddleware({
            target: 'https://us.api.blizzard.com',
            changeOrigin: true,
            pathRewrite: {
                '^/blizzard-api': '',
            },
        })
    );

    app.use(
        '/github-api',
        createProxyMiddleware({
            target: 'https://api.github.com',
            changeOrigin: true,
            pathRewrite: {
                '^/github-api': '',
            },
        })
    );
};
