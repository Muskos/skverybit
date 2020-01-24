const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withAssetsImport = require('next-assets-import');

module.exports = withPlugins([
    [withAssetsImport],
    [withSass, {
        cssModules: true,
        devIndicators: {
            autoPrerender: false,
        }
    }]
]);