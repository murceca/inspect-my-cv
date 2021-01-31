'use strict';

const { createProxyMiddleware } = require('http-proxy-middleware');

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  // BrowserSync
  gulp.task('browserSync', (done) => {
    const apiProxy = createProxyMiddleware('/api', {
      target: 'http://localhost:8080'
    });
    browserSync.init({
      open: args.open ? 'local' : false,
      startPath: config.baseUrl,
      port: config.port || 3000,
      server: {
        baseDir: taskTarget,
        middleware: [apiProxy],
        routes: (() => {
          let routes = {};

          // Map base URL to routes
          routes[config.baseUrl] = taskTarget;

          return routes;
        })()
      }
    });
    done();
  });
}
