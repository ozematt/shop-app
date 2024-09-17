# shop-app

Dockeryzacja Aplikacji:

1. Ustawienie zmiennych środowiskowych USER_ID i GROUP_ID
Wygląda na to, że zmienne środowiskowe USER_ID i GROUP_ID nie są ustawione, co może wpływać na uprawnienia plików w kontenerze. Możesz ustawić te zmienne środowiskowe, edytując plik .bashrc lub .zshrc:
export USER_ID=$(id -u)
export GROUP_ID=$(id -g)

Dla Bash:
Otwórz plik .bashrc w edytorze tekstu:

bash
Skopiuj kod
nano ~/.bashrc
Dodaj poniższe linie na końcu pliku:

bash
Skopiuj kod
export USER_ID=$(id -u)
export GROUP_ID=$(id -g)
Zapisz zmiany i zamknij edytor (w nano naciśnij Ctrl + X, a potem Y i Enter).

Załaduj zmiany w bieżącej sesji:

bash
Skopiuj kod
source ~/.bashrc

Dla Zsh:
Otwórz plik .zshrc w edytorze tekstu:

bash
Skopiuj kod
nano ~/.zshrc
Dodaj poniższe linie na końcu pliku:

bash
Skopiuj kod
export USER_ID=$(id -u)
export GROUP_ID=$(id -g)
Zapisz zmiany i zamknij edytor (w nano naciśnij Ctrl + X, a potem Y i Enter).

Załaduj zmiany w bieżącej sesji:

bash
Skopiuj kod
source ~/.zshrc

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
