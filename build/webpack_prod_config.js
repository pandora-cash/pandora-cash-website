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
            postProcess: function (context) {

                //60 letters
                const titles = {
                    '/download':
                       //                                                            !60 end
                        'Download Desktop Privacy Coin Wallet - untraceable money app',
                    "articles":
                        "Articles | Privacy is the Pandora's Box",
                    '/privacy-coin':
                        "Privacy coin",
                    '/privacy-coins': "Privacy coins",
                    '/monero-anonymity':
                        "Monero anonymity",
                    "/what-is-bitcoin":
                        "What is Bitcoin",
                    "/economic-challenges-bitcoin":
                        "Economic Challenges of Bitcoin",
                    "/history-of-bitcoin":
                        "History of Bitcoin",
                    "/how-to-send-money-anonymously":
                        "How to send Money anonymously",
                    "/how-to-receive-money-anonymously":
                        "How to receive Money anonymously",
                    "/pandora-wallet":
                        "Pandora Wallet",
                    "/privacy-coins-list":
                        "Privacy Coins List",
                    '/untraceable-money-transfer-app':
                        "Untraceable Money Transfer App",
                }

                //150
                const descriptions = {
                    '/download':
                       //                                                                                                                                                      !150 end
                        'Pandora Cash Desktop Privacy Coin Wallet is available for download. Download and install untraceable money transfer app for free. Download wallet now!',
                    "/articles":
                        "Pandora Cash Privacy Articles. Open the Pandora's Box. Find Privacy and Security articles. Learn how to regain your privacy online.",
                    '/privacy-coin':
                        "Privacy coin enables anonymous blockchain transactions. A privacy coin is anonymous by employing various techniques. A privacy coin is untraceable.",
                    '/privacy-coins':
                        "Privacy coins enable anonymous crypto transactions. Privacy coins make untraceable payments avoiding chain analysis. Find most anonymous privacy coins",
                    '/monero-anonymity':
                        "Monero anonymity provides anonymous transactions. Monero anonymity is using Ring CT to mix outputs. Monero anonymity doesn't disclose amounts.",
                    "/what-is-bitcoin":
                        "What is Bitcoin? Bitcoin is the first a digital cryptocurrency. What is bitcoin mining ? It serves several functions. What is Bitcoin cash worth?",
                    "/economic-challenges-bitcoin":
                        "Find the economic challenges bitcoin is facing. Top biggest economic challenges bitcoin has. Bitcoin Economic challenges for mainstream adoption.",
                    "/history-of-bitcoin":
                        "The history of Bitcoin starts before 2008. The history of Bitcoin, is constantly evolving. inventor and history of Bitcoin remains a mystery.",
                    "/how-to-send-money-anonymously":
                        "Find how to send money anonymously to business associates. We present top 5 methods of how to send money anonymously online! How to money anonymously!",
                    "/how-to-receive-money-anonymously":
                        "Find how to receive money anonymously from people! Discover top 7 methods of how to receive money anonymously! How to receive money anonymously online",
                    "/pandora-wallet":
                        "Learn more about Pandora Wallet. Before choosing Pandora's Wallet, it is important to read these important facts! Download now Pandora's wallet!",
                    "/privacy-coins-list":
                        "List of Privacy Coins. Find our Top privacy Coins List. Discover the top 4 privacy coins in our list!. Privacy Coins hide transaction data.",
                    "/untraceable-money-transfer-app":
                        "Best untraceable money transfer apps to send money anonymously. Learn about the most popular untraceable money transfer apps available for download."
                }

                //max 10 keywords
                const keywords = {
                    '/download': "download, binary, desktop wallet, download wallet, privacy coin wallet, download privacy coin, install wallet",
                    "/articles": "articles, article, blog, privacy articles, anonymity articles",
                    '/privacy-coin': "privacy coin, privacy coins, privacy cryptocurrency, anonymous crypto, anon crypto, untraceable electronic cash",
                    '/privacy-coins': "privacy coins, privacy coin, privacy cryptocurrencies, anonymous crypto, anon crypto, untraceable electronic cash",
                    '/monero-anonymity': "monero anonymity, monero, xmr, anonymity, privacy, untraceability, untraceable, anon crypto, privacy coin",
                    "/what-is-bitcoin": "what is bitcoin, bitcoin, cryptocurrency, crypto, bit coin, blockchain",
                    "/economic-challenges-bitcoin": "economic challenges bitcoin, economic, economy, challenges, bitcoin, crypto, cryptocurrency, btc",
                    "/history-of-bitcoin": "history of bitcoin, history, bitcoin, price history, launch, cryptocurrency, btc",
                    "/how-to-send-money-anonymously": "send, money, anonymously, anonymity, send money, privacy coin, untraceable",
                    "/how-to-receive-money-anonymously": "receive, money, anonymously, anonymity, receive money, privacy coin, untraceable, prepaid debit cards",
                    "/pandora-wallet": "pandora wallet, pandora, pandora's, wallet, pandora's wallet",
                    "/privacy-coins-list": "privacy coins list, privacy, coins, list, privacy coins, top 4",
                    "/untraceable-money-transfer-app": "untraceable money transfer app, app, untraceable money, transfer, transfer app",
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
                    "/pandora-wallet": "/static/img/articles/pandora-wallet.jpg",
                    "/privacy-coins-list": "/static/img/articles/privacy-coins-list.jpg",
                    "/untraceable-money-transfer-app": "/static/img/articles/untraceable-money-transfer-app.jpg",
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
                    context.html = context.html.replace(
                        /<meta property="twitter:title" content="[^<]*">/i,
                        `<meta property="twitter:title" content="${titles[context.route]}">`
                    )
                    context.html = context.html.replace(
                        /<meta property="twitter:image:alt" content="[^<]*">/i,
                        `<meta property="twitter:image:alt" content="${titles[context.route]}">`
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
                    context.html = context.html.replace(
                        /<meta property="twitter:description" content="[^<]*">/i,
                        `<meta property="twitter:description" content="${descriptions[context.route]}">`
                    )
                }

                if (keywords[context.route])
                    context.html = context.html.replace(
                        /<meta name="keywords" content="[^<]*">/i,
                        `<meta name="keywords" content="${keywords[context.route]}">`
                    )

                if (images[context.route]) {
                    context.html = context.html.replace(
                        /<meta property="og:image" content="[^<]*">/i,
                        `<meta property="og:image" content="${images[context.route]}">`
                    )
                    context.html = context.html.replace(
                        /<meta property="twitter:image" content="[^<]*">/i,
                        `<meta property="twitter:image" content="${images[context.route]}">`
                    )
                }

            }
        }),
    ]

});
