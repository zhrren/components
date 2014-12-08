'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/jquery/jquery-ui.git',
        version: '1.11.2',
        description: 'jquery-ui',
        build: 'npm install && npm install grunt-cli && ./node_modules/.bin/grunt concat',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: /^\/ui\/(.*?)$/,
                release: '$1'
            },
            {
                reg: '/themes/**',
                release: '$&'
            },
            {
                reg: '/dist/jquery-ui.js',
                release: false
            },
            {
                reg: '/dist/jquery-ui.css',
                release: false
            },
            {
                reg: '/dist/i18n/jquery-ui-i18n.js',
                release: 'i18n/all-i18n.js'
            },
            {
                reg: /^\/dist\/(.*?)$/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }];
})();
