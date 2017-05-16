(function() {
  'use strict';

  const path = require('path');
  const fs = require('fs');
  const enableDestroy = require('server-destroy');
  const finalhandler = require('finalhandler');
  const serveStatic = require('serve-static');

  const serve = serveStatic(path.resolve(__dirname,'../client'));
  const certs = {
    key: fs.readFileSync(path.resolve(__dirname,'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname,'certificate.pem'))
  };

  const server = require('http2').createServer(certs, (req,res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    const done = finalhandler(req, res)
    serve(req, res, done)
  });
  server.listen(8443,'0.0.0.0');
  enableDestroy(server);
  process.on('SIGINT', () => {
    server.destroy();
    console.log('Shutting Down');
    process.exit(0);
  });
  console.log('Server operational on port 8443');
})();