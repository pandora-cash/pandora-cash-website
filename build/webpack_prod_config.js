const path = require('path')
const base = require('./webpack_config')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin");
const PrerenderSPAPlugin = require('prerender-spa-plugin-next')

module.exports = (env, argv) => merge( base(env, argv), {

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    plugins: [
        new CompressionPlugin(),
        new TerserPlugin(),
        new PrerenderSPAPlugin({

            routes: [ '/', '/download', '/articles', '/privacy-coin', '/privacy-coins', '/what-is-bitcoin',
                '/economic-challenges-bitcoin', '/monero-anonymity', '/how-to-send-money-anonymously',
            '/how-to-receive-money-anonymously', '/history-of-bitcoin', '/pandora-wallet', '/privacy-coins-list',
            '/untraceable-money-transfer-app'],

            //The options to pass to the renderer class's constructor
            rendererOptions: {
                // Optional - The name of the property to add to the window object with the contents of `inject`.
                injectProperty: '__PRERENDER_INJECTED',
                maxConcurrentRoutes: 4,
                renderAfterDocumentEvent: "render-event",
                renderAfterElementExists: '#website',
            },

        }),
    ]

});
