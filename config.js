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
    permalinks: {  // these are paramlinks static links which are easier to remeber 
        // The pattern can contain a reference to any piece of metadata associated with the file by using the :PROPERTY syntax for placeholders.
        // this will replace the file name with slug metadata assocciated with the file
        // if not metadata as in this case :slug is present then original default file_name can be seen
        linksets: [{
            pattern: ":slug",
            match: {
                collection: "blogs"
            }
        }]
    },
    filemetadata: [
        {
            pattern: "blogs/*.md",
            metadata: {
                collection: "blogs",
                layout: "blogs.html"
            }
        }
    ],
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