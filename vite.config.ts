import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/

/**
 * https://qiita.com/taka_1156/items/ec0a7ccbfcefd976d32c#3-viteconfigts%E8%A8%AD%E5%AE%9A
 * これと同じ
 */
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vite-react-portfolio/' : './',
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': path.resolve('__dirname', '/src'),
    },
  },
  plugins: [reactRefresh()],
});
