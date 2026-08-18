import bunAdapter from './src/lib/adapters/bun.ts';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: bunAdapter(),
    paths: {
      base: '',
      assets: '',
    },
    alias: {
      $lib: 'src/lib',
      $components: 'src/lib/components',
      $api: 'src/routes/api',
    },
  }
};
