const start = process.hrtime();
const task = process.argv[2];

/* Dependencies
=================================================================================
*/
const config = require('./config')
// const chalk  = require('chalk');
const metalsmith = require("metalsmith")(__dirname);
const plugins = require("load-metalsmith-plugins")();
const prettytime = require("pretty-hrtime")

/* Pipeline 
=================================================================================
*/

metalsmith
    .source(config.source)
    .destination(config.destination)
    .use(plugins.collections(config.collections))
    .use(plugins.assets(config.assets))
    .use(plugins.markdown())
    .use(plugins.metallic()) // what does this do
    .use(plugins.permalinks(config.permalinks)) // this makes other links visiable and blocks others
    .use(plugins.layouts(config.layouts))
    .use(plugins.inPlace(config.inPlace))

// node metalsmith.js watch
if (task === 'watch') {
    //? if watch is task then serve and watch through metal smith
    metalsmith
        .use(plugins.serve(config.serve))
        .use(plugins.watch(config.watch))
}

/* Generate
   ========================================================================== */

metalsmith.build((err) => {
  if (err) throw err;
  else buildCompleted();
});

const buildCompleted = () => {
  if (task === 'build') {
    buildDuration();
  }

  // if (task === 'deploy') {
  //   ghpages.publish(config.destination, {
  //     branch: 'gh-pages',
  //     repo: 'git@github.com:zenorocha/zenorocha.com.git'
  //   }, (err) => {
  //     if (err) console.log(err);
  //     else buildDuration();
  //   });
  // }
}

const buildDuration = () => {
  const end = prettytime(process.hrtime(start));
  console.log(`> done in ${chalk.green(end)}`);
}