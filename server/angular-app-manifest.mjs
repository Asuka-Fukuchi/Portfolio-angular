
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
    'index.csr.html': {size: 816, hash: '83322179ca2829caad1c4b39c43d5e5b78356f911a929beed3fef52278ced6aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1133, hash: '72cd2e58f9218ad1f4ed1275d72dd14c2f85eba4eb1a2b4321c21997a488aa14', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6650, hash: 'a32a86102ef98ebe4e578f4a9faa047ccc8a50a16fb84ecd9cd84ea3b22a512f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5421, hash: '24bfc97220c96c0bceaee0d81648ec41d1371f653e296a728c6910a4410260ea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 6171, hash: '1e911b3a8297458d7d27f69e3a0c525e9f38579cfcf074ff1a3100fb82ac8a41', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11163, hash: '88d4a327f7b161640c8a81965355f3105ade3ab7fe82d19a83856537755d2168', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-SSI3FPCI.css': {size: 71, hash: 'wzejYXfSsnE', text: () => import('./assets-chunks/styles-SSI3FPCI_css.mjs').then(m => m.default)}
  },
};
