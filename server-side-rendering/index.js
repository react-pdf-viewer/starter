// Ignore CSS files
require.extensions['.css'] = () => {};

require('@babel/register')({
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
            },
        ],
    ],
    presets: ['@babel/preset-env', '@babel/preset-react'],
});
require('./src/server');
