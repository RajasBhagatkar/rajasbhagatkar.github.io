module.exports = {
    source: 'src/content',
    destination: 'dist',
    assets: {
        source: 'src/assets',
        destination: '.'
    },
    layouts: {
        engine: 'handlebars',
        directory: 'src/layouts',
        partials: {
            updates: '../partials/updates',
            footer: '../partials/footer',
            header: '../partials/header',
            navbar: '../partials/navbar'
        }
    },
    // don't know what does this do
    inPlace: { // might be the starting point of the engine to access files
        directory: 'src/layouts',
        engine: 'handlebars'
    },
    dateFormatter: {
        format: 'MMM DD, YYYY'
    },
    collections: { // collections made the .md files available with name blogs and homeArticles
        blogs: {
            pattern: 'blogs/*.md',
            sortBy: 'date',
            reverse: true
        },
        homeBlogs: {
            pattern: 'blogs/*.md',
            sortBy: 'date',
            reverse: true,
            limit: 3
        }
    },
    permalinks: {  // it makes the other webite links visible instead of blocking them
        linksets: [{
            pattern: ":slug",
            match: {
                collections: "blogs"
            }
        }]
    },
    // filemetadata: [
    //     {
    //         pattern: "blogs/*.md",
    //         metadata: {
    //             collections: "blogs",
    //             layouts: "blogs.html"
    //         }
    //     }
    // ],
    //? metalsmith server config
    serve: {
        port: 8000,
        verbose: true
    },
    //? watch these file/folder for changes
    watch: {
        '${source}/**/*': true,
        'src/assets/**/*': '**/*',
        'src/content/**/*': '**/*',
        'src/layouts/**/*': '**/*',
        'src/partials/**/*': '**/*'
    }
};