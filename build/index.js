const {
  run
} = require('runjs');
const path = require('path');
const chalk = require('chalk');
const rawArgv = process.argv.slice(2);
const args = rawArgv.join(' ');
const publicPath = '/h5-ui/';
if (process.env.npm_config_preview || rawArgv.includes('--preview')) {
  const report = rawArgv.includes('--report');

  run(`vue-cli-service build ${args}`);

  const port = 9527;

  let connect = require('connect');
  let serveStatic = require('serve-static');
  const history = require('connect-history-api-fallback')
  const app = connect();
  // 避免页面刷新404
  app.use(history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    rewrites: [{
        from: /^\/.*report\.html(\/)*$/,
        to: function (context) {
          return publicPath + 'report.html';
        }
      },
      {
        from: /^\/.*$/,
        to: function (context) {
          return publicPath;
        }
      }
    ]
  }));
  app.use(
    publicPath,
    serveStatic(`./${publicPath}`, {
      index: ['index.html', '/'],
    }),
  );

  app.listen(port, function () {
    console.log(chalk.green(`> Preview at  http://localhost:${port}${publicPath}`));
    if (report) {
      console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}report.html`));
    }
  });
} else {
  run(`vue-cli-service build ${args}`);
}