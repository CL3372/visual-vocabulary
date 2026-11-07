import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Split the build so a deploy that only changes app code does not make people
// download the large word data again (and the other way round). File names are
// content-hashed, so vercel.json can cache everything in /assets for a year.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            // Libraries every screen needs. The map libraries are left out on purpose:
            // they load only when the Map tab is opened (see App.tsx).
            { name: 'vendor', test: /node_modules[\\/](?:react|react-dom|scheduler|@supabase|@capacitor|lucide-react)[\\/]/, priority: 20 },
            // The vocabulary itself (src/data, except the per-language files in src/data/extra, which already load on demand).
            { name: 'word-data', test: /src[\\/]data[\\/](?!extra[\\/])/, priority: 10 },
          ],
        },
      },
    },
  },
})
