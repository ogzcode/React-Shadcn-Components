import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [react(),
    mdx({
      remarkPlugins: [],
      rehypePlugins: [],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
