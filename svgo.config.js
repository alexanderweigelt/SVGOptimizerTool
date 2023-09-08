module.exports = {
    multipass: true, // boolean. false by default
    plugins: [
        // set of built-in plugins enabled by default
        'preset-default',

        // enable built-in plugins to remove arbitrary SVG elements by ID or className.

        'removeDimensions',
        'convertStyleToAttrs',
        'removeUnknownsAndDefaults',
        {
            name: "removeAttrs",
            params: {
                attrs: "id"
            }
        },

        // or by expanded notation which allows to configure plugin
        {
            name: 'sortAttrs',
            params: {
                xmlnsOrder: 'alphabetical',
            },
        },
    ],
};