
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/<Portfolio-angular>/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/%3CPortfolio-angular%3E"
  },
  {
    "renderMode": 2,
    "route": "/%3CPortfolio-angular%3E/about"
  },
  {
    "renderMode": 2,
    "route": "/%3CPortfolio-angular%3E/project"
  },
  {
    "renderMode": 2,
    "route": "/%3CPortfolio-angular%3E/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 818, hash: 'abbe78ff3e3b056fcc60f6d158861b0de8b1417eacd88f4e6683324012960281', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1135, hash: '77355482e6ddee95f10ac23f150d387ead0db7f9dddc5159f74b380131ba27cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SSI3FPCI.css': {size: 71, hash: 'wzejYXfSsnE', text: () => import('./assets-chunks/styles-SSI3FPCI_css.mjs').then(m => m.default)}
  },
};
