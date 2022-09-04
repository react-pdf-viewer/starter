const path = require('path');

module.exports = {
    modifyWebpackConfig(opts) {
        const config = opts.webpackConfig;
        config.resolve.alias['pdfjs-dist'] = path.join(__dirname, './node_modules/pdfjs-dist/legacy/build/pdf');

        return config;
    },
};
