
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio-angular"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-angular/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-angular/project"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-angular/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 816, hash: '0920993b6af6cd32013d2c5587a7f0e7e4996dd796ea4aad9453de639a9428fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1133, hash: '53f508ee78848a9c2ed1e9b7b8146bfed2463535c23326d9ac4eb347ada09957', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'project/index.html': {size: 6742, hash: '6a237e783e641196d5e8bd7f2e5cb684fa4348b03f9bbe2617978885afa23c46', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5437, hash: '0ceb46e748d58da77a9e09da83a7d4a372ef1d7330d91a6c084282c5bda7a8bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11178, hash: '3592c0123cf584771c1a0243d4e97f1b895f362e083cde35797fa55e959a3c2a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6666, hash: 'eb2490579f75b4d85c9efbd85af6fcc0fc5be5800dba23dd0543961f2bd56b91', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-SSI3FPCI.css': {size: 71, hash: 'wzejYXfSsnE', text: () => import('./assets-chunks/styles-SSI3FPCI_css.mjs').then(m => m.default)}
  },
};
