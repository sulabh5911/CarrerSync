import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite configuration
export default defineConfig({
  plugins: [react()],
});
