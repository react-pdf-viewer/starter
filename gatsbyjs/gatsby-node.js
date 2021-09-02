exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
    // It's required by pdfjs-dist
    actions.setWebpackConfig({
        externals: [
            {
                canvas: 'canvas',
            },
        ],
    });
};
