const config = {    
    baseUrl: '/',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    staticDirectories: ['static'],
    title: 'React PDF Viewer demo',
    url: 'https://your-docusaurus-test-site.com',
    plugins: ['./canvas-loader.js'],
    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/react-pdf-viewer/starter/tree/main/docusaurus/',
                }
            })
        ],
    ],
};

module.exports = config;
