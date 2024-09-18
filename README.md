# shop-app


2. Ustawienie host w konfiguracji Vite
Jeśli chcesz, aby serwer Vite był dostępny na wszystkich interfejsach sieciowych (co jest przydatne, gdy pracujesz w Dockerze), musisz ustawić opcję host na 0.0.0.0 w pliku vite.config.js:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Upewnij się, że port jest zgodny z portem mapowanym w Dockerze
    host: '0.0.0.0', // Ustawienie hosta na 0.0.0.0, aby dostępne było z zewnątrz
  },
});
