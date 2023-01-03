const path = require('path')
const base = require('./webpack_config')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

const PrerenderSPAPlugin = require('prerender-spa-plugin-next')

module.exports = (env, argv) => merge( base(env, argv), {

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    plugins: [
        new TerserPlugin(),
        new PrerenderSPAPlugin({

            routes: [ '/', '/download', '/privacy-coin', '/privacy-coins', '/what-is-bitcoin',
                '/economic-challenges-bitcoin', '/monero-anonymity', '/how-to-send-money-anonymously',
            '/how-to-receive-money-anonymously', '/articles', '/history-of-bitcoin'],

            //The options to pass to the renderer class's constructor
            rendererOptions: {
                // Optional - The name of the property to add to the window object with the contents of `inject`.
                injectProperty: '__PRERENDER_INJECTED',
                maxConcurrentRoutes: 4,
                renderAfterDocumentEvent: "render-event",
                renderAfterElementExists: '#website',
            },
            postProcess: function (context) {

                //60 letters
                const titles = {
                    '/download': 'Download Desktop Privacy Coin Wallet - untraceable money app',
                    '/privacy-coin': "Privacy coin",
                    '/privacy-coins': "Privacy coins",
                    '/monero-anonymity': "Monero anonymity",
                    "/what-is-bitcoin": "What is Bitcoin",
                    "/economic-challenges-bitcoin": "Economic Challenges of Bitcoin",
                    "/history-of-bitcoin": "History of Bitcoin",
                    "/how-to-send-money-anonymously": "How to send Money anonymously",
                    "/how-to-receive-money-anonymously": "How to receive Money anonymously",
                }

                //220
                const descriptions = {
                    '/download': 'Pandora Cash Desktop Privacy Coin Wallet is available for download. You can download and install this untraceable money transfer app for free.',
                    '/privacy-coin': "Privacy coin is a cryptocurrency that enables anonymous and private blockchain transactions by concealing their source and destination. This privacy coin employs a variety of techniques, such as hiding a user's actual wallet balance and address and combining multiple transactions to avoid chain analysis",
                    '/privacy-coins': "Privacy coins are a group of cryptocurrencies that enable anonymous and private blockchain transactions by concealing their source and destination. These anonymous crypto employ a variety of techniques, such as hiding a user's actual wallet balance and address and combining multiple transactions to avoid chain analysis",
                    '/monero-anonymity': "Monero anonymity cryptocurrency can provide quick, inexpensive, and anonymous transactions. Monero privacy creates a transaction using Ring CT (confidential transactions) in a way that tx outputs are mixed with similar outputs from the entire TXO (transaction output) set without disclosing the amounts to anyone.",
                    "/what-is-bitcoin": "What is Bitcoin? The first and most well-known cryptocurrency, Bitcoin, is what it stands for. Through the use of a decentralized protocol, cryptography, and a mechanism to reach international consensus on the status of a regularly updated public transaction ledger known as a \"blockchain\", it permits p2p exchange of value.",
                    "/economic-challenges-bitcoin": "Presenting most prominent economic challenges faced by bitcoin is presently facing.  What needs to happen for consumers to start using bitcoin on a large scale, as well as the biggest challenges to its mainstream adoption.",
                    "/history-of-bitcoin": "The history of Bitcoin starts before the 2008 White Paper. The history of Bitcoin, like most human inventions, is constantly evolving. Bitcoin was originally worth next to nothing. The inventor of Bitcoin remains a mystery. The transaction that first gave Bitcoin monetary value was in 2009.",
                    "/how-to-send-money-anonymously": "Only cash, money orders, prepaid disposable cards, or having a third party physically hand them cash are truly completely anonymous ways to send money anonymously. You can attempt to send money through private payment methods using fictitious names and disposable email addresses.",
                    "/how-to-receive-money-anonymously": "If you want to receive money anonymously, there are a few techniques . Although some money transfer services, such as PayPal and Western Union, let you receive money anonymously, the transfer itself is not entirely anonymous. Cash, money orders, and prepaid debit cards are the only anonymous methods.",
                }

                const keywords = {
                    '/download': "download, binary, desktop wallet, download wallet, privacy coin wallet, download privacy coin, install wallet",
                    '/privacy-coin': "privacy coin, privacy coins, privacy cryptocurrency, anonymous crypto, anon crypto, untraceable electronic cash",
                    '/privacy-coins': "privacy coins, privacy coin, privacy cryptocurrencies, anonymous crypto, anon crypto, untraceable electronic cash",
                    '/monero-anonymity': "monero, xmr, anonymity, privacy, untraceability, untraceable, anon crypto, privacy coin",
                    "/what-is-bitcoin": "bitcoin, cryptocurrency, crypto, bit coin, blockchain",
                    "/economic-challenges-bitcoin": "economic, economy, challenges, bitcoin, crypto, cryptocurrency, btc",
                    "/history-of-bitcoin": "history, bitcoin, price history, launch, cryptocurrency, btc",
                    "/how-to-send-money-anonymously": "send, money, anonymously, anonymity, send money, privacy coin, untraceable",
                    "/how-to-receive-money-anonymously": "receive, money, anonymously, anonymity, receive money, privacy coin, untraceable, prepaid debit cards",
                }

                const images = {
                    '/privacy-coin': "/static/img/articles/privacy-coin.jpg",
                    '/privacy-coins': "/static/img/articles/privacy-coins.jpg",
                    '/monero-anonymity': "/static/img/articles/monero-anonymity.jpg",
                    "/what-is-bitcoin": "/static/img/articles/what-is-bitcoin.jpg",
                    "/economic-challenges-bitcoin": "/static/img/articles/economic-challenges-bitcoin.jpg",
                    "/history-of-bitcoin": "/static/img/articles/history-of-bitcoin.jpg",
                    "/how-to-send-money-anonymously": "/static/img/articles/how-to-send-money-anonymously.jpg",
                    "/how-to-receive-money-anonymously": "/static/img/articles/how-to-receive-money-anonymously.jpg",
                }

                if (titles[context.route]) {
                    context.html = context.html.replace(
                        /<title>[^<]*<\/title>/i,
                        '<title>' + titles[context.route] + '</title>'
                    )
                    context.html = context.html.replace(
                        /<meta property="og:title" content="[^<]*">/i,
                        `<meta property="og:title" content="${titles[context.route]}">`
                    )
                }

                if (descriptions[context.route]) {
                    context.html = context.html.replace(
                        /<meta name="description" content="[^<]*">/i,
                        `<meta name="description" content="${descriptions[context.route]}">`
                    )
                    context.html = context.html.replace(
                        /<meta property="og:description" content="[^<]*">/i,
                        `<meta property="og:description" content="${descriptions[context.route]}">`
                    )
                }

                if (keywords[context.route])
                    context.html = context.html.replace(
                        /<meta name="keywords" content="[^<]*">/i,
                        `<meta name="keywords" content="${keywords[context.route]}">`
                    )

                if (images[context.route])
                    context.html = context.html.replace(
                        /<meta property="og:image" content="[^<]*">/i,
                        `<meta property="og:image" content="${images[context.route]}">`
                    )

            }
        }),
    ]

});
