// vite.config.js
import react from "file:///F:/legalco-all/legalco/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///F:/legalco-all/legalco/node_modules/vite/dist/node/index.js";
import { ViteImageOptimizer } from "file:///F:/legalco-all/legalco/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 80
      },
      jpeg: {
        quality: 80
      },
      png: {
        quality: 80
      },
      webp: {
        quality: 80
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxsZWdhbGNvLWFsbFxcXFxsZWdhbGNvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxsZWdhbGNvLWFsbFxcXFxsZWdhbGNvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9sZWdhbGNvLWFsbC9sZWdhbGNvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRyZWFjdCgpLFxuXHRcdFZpdGVJbWFnZU9wdGltaXplcih7XG5cdFx0XHRqcGc6IHtcblx0XHRcdFx0cXVhbGl0eTogODBcblx0XHRcdH0sXG5cdFx0XHRqcGVnOiB7XG5cdFx0XHRcdHF1YWxpdHk6IDgwXG5cdFx0XHR9LFxuXHRcdFx0cG5nOiB7XG5cdFx0XHRcdHF1YWxpdHk6IDgwXG5cdFx0XHR9LFxuXHRcdFx0d2VicDoge1xuXHRcdFx0XHRxdWFsaXR5OiA4MFxuXHRcdFx0fVxuXHRcdH0pXG5cdF1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUCxPQUFPLFdBQVc7QUFDNVEsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUywwQkFBMEI7QUFHbkMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sbUJBQW1CO0FBQUEsTUFDbEIsS0FBSztBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNMLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDQSxLQUFLO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0wsU0FBUztBQUFBLE1BQ1Y7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
