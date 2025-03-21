import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
	plugins: [
		react(),
		eslint({
			fix: true, // Автоматически исправлять ошибки ESLint
			include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'], // Проверять только файлы в src
		}),
	],
	esbuild: {
		loader: {
			'.js': 'jsx', // Указываем, что файлы .js должны быть обработаны как JSX
		},
	},
})
