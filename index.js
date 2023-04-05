const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://bio.torre.co',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api',
  },
  onProxyRes: function(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
}));

app.listen(3001, () => {
  console.log('Proxy server listening on port 3001');
});