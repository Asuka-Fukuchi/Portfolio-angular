
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
    'index.csr.html': {size: 816, hash: 'f736d73e2d72a16e222c577854cc97208ef07b8d87ba0b44caf6a625a8b9fd2e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1133, hash: '61cd464afdc1a23a82f971d374b6410c9902be3e97cdccd16756714b80c3c218', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5437, hash: '1ac804ce649e49582a231f8918c2e3f078fab131c501d5aba6c8c39f81e56bd3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6666, hash: 'ee6f539d7ab127be3821e097e3112b790d033d986149261d41f448a297e0f876', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 12695, hash: '5eef20027af406344dc4b5f32db3b149e05541d0aa5ca2d7218e30345ac02462', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11253, hash: '7993a066eb23a5c7a5fa64fc540ef1adc58c2b7810e5d0c88541272354ff3de1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-SSI3FPCI.css': {size: 71, hash: 'wzejYXfSsnE', text: () => import('./assets-chunks/styles-SSI3FPCI_css.mjs').then(m => m.default)}
  },
};
