const path = require('path')
const base = require('./webpack_config')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin");
const PrerenderSPAPlugin = require('prerender-spa-plugin-next')
const zopfli = require("@gfx/zopfli");
const zlib = require("zlib");

module.exports = (env, argv) => merge( base(env, argv), {

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    plugins: [
        //zopfli compression
        new CompressionPlugin({
            filename: "[path][base].gz",
            compressionOptions: {
                numiterations: 15,
            },
            algorithm(input, compressionOptions, callback) {
                return zopfli.gzip(input, compressionOptions, callback);
            },
            test: /\.(js|css|html|svg|png|jpg|jpeg)$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        //brotli
        new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|css|html|svg|png|jpg|jpeg)$/,
            compressionOptions: {
                params: {
                    [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                },
            },
            threshold: 10240,
            minRatio: 0.8,
        }),
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
