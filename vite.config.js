import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/recommended_movie_card_board', // 깃허브 리포지토리와 같게
  plugins: [react()],
  // server: {
  //   fs: {
  //     strict: false,
  //   },
  //   historyApiFallback: true,
  // },
})
