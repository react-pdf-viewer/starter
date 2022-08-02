module.exports = () => ({
    name: 'canvas-loader',
    configureWebpack() {
        return {
            externals: [
                {
                    canvas: 'canvas',
                },
            ],
        };
    },
});
