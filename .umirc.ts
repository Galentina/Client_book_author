import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/user', component: '@/pages/User' },
    { path: '/book', component: '@/pages/book/Book' },
    { path: '/author', component: '@/pages/author/Author' },
  ],
  fastRefresh: {},
});
