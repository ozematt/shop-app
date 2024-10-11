# shop-app



## Opis projektu


shop-app jest to aplikacja e-commerce, która oferuje funkcjonalny i nowoczesny sklep internetowy. Główne funkcjonalności aplikacji to obsługa motywów, katalog produktów z wyszukiwarką i filtrowaniem, zarządzanie koszykiem, proces zakupu oraz pulpit użytkownika z historią zamówień. Projekt został zbudowany z wykorzystaniem React, TypeScript oraz komponentów z biblioteki Material-UI (MUI), które zapewniają nowoczesny i intuicyjny interfejs użytkownika.

Aplikacja korzysta z Fake Store API do pobierania danych produktów, co umożliwia testowanie funkcjonalności bez potrzeby tworzenia własnego backendu.



### Funkcjonalności


### 1. Obsługa motywów

- Użytkownik ma możliwość przełączania między **jasnym** a **ciemnym** motywem.
- Motywy zostały zaprojektowane z uwzględnieniem dostępności, czytelności i estetyki, co gwarantuje komfort użytkowania w obu wersjach.

### 2. Uwierzytelnianie użytkowników

- Po zalogowaniu, użytkownicy mogą dodawać produkty do koszyka i składać zamówienia.

### 3. Katalog produktów

- Aplikacja wyświetla produkty wraz z ich zdjęciami, opisami, cenami i kategoriami.
- Funkcje **filtrowania** oraz **sortowania** produktów (np. według ceny, kategorii).
- **Lazy-loading** produktów poprawia wydajność ładowania strony.

### 4. Wyszukiwanie produktów

- Wyszukiwarka produktów pozwala użytkownikom na wyszukiwanie według słów kluczowych, kategorii oraz innych atrybutów.

### 5. Koszyk

- Użytkownicy mogą:
  - Dodawać produkty do koszyka.
  - Aktualizować ilość produktów.
  - Usuwać produkty z koszyka.
- Koszyk został zaprojektowany tak, aby maksymalnie ułatwić proces zakupowy.

### 6. Proces realizacji zakupu

- Użytkownicy przechodzą przez cały proces zakupu, który obejmuje:
  1. Logowanie.
  2. Wprowadzenie informacji o adresie wysyłki.
  3. Wybór metody płatności.
  4. Podsumowanie i potwierdzenie zamówienia.

### 7. Pulpit użytkownika

- Użytkownik ma dostęp do swojego pulpitu z **historią zamówień**.



## Technologia


- **React** – JavaScriptowy framework do budowy interfejsów użytkownika.
- **TypeScript** – Superset JavaScriptu, który zapewnia statyczne typowanie, co poprawia niezawodność i stabilność aplikacji.
- **Material-UI (MUI)** – Framework CSS do stylizowania komponentów.
- **React-Router** – Biblioteka do zarządzania trasami w aplikacji React.
- **React Hook Forms** – Biblioteka do zarządzania formularzami i ich walidacją.
- **TanStack Query** – Narzędzie do zarządzania stanem danych z API.
- **Redux Toolkit** – Biblioteka do globalnego zarządzania stanem aplikacji.
- **Vitest** i **React Testing Library** – Narzędzia do testów jednostkowych.
- **Playwright** – Narzędzie do testów end-to-end (E2E).
- **Docker** – Narzędzie do konteneryzacji aplikacji.
- **Fake Store API** – Zewnętrzne API, które dostarcza dane produktów, takie jak opisy, ceny, zdjęcia i kategorie (dokumentacja: [https://fakestoreapi.com/](https://fakestoreapi.com/)).
- **API REST** – Obsługa danych przez endpointy API, m.in. `/auth/login`, `/products`.



## Instalacja


### Opcja 1: Uruchamianie lokalnie

1. **Sklonuj repozytorium:**
   ```sh
   git clone https://github.com/ozematt/shop-app.git
   ```
2. **Przejdź do katalogu projektu:**
   ```sh
   cd shop-app
   ```
3. **Zainstaluj zależności:**
   Upewnij się, że masz zainstalowany Node.js i npm. Następnie uruchom poniższą komendę, aby zainstalować wszystkie zależności projektu.
   ```sh
   npm install
   ```
4. **Uruchom aplikacje:**
   ```sh
   npm run dev
   ```
   Aplikacja będzie dostępna pod adresem: http://localhost:3000/


### Opcja 2: Uruchamianie w kontenerze (Docker)

1. **Upewnij się, że masz zainstalowany Docker.**
2. **Sklonuj repozytorium:**
   ```sh
   git clone https://github.com/ozematt/shop-app.git
   ```
3. **Przejdź do katalogu projektu:**
   ```sh
   cd shop-app
   ```
4. **Uruchom kontener w trybie developerskim za pomocą Docker Compose:**
   ```sh
   ./startdev.sh
   ```
4. **Zainstaluj zależności:**
   ```sh
   npm install
   ```
5. **Uruchom aplikacje:**
   ```sh
   npm run dev
   ```
   Aplikacja będzie dostępna pod adresem: http://localhost:3000/
   


## Użycie


- **Zmiana motywu** – Przycisk do przełączania motywów znajduje się w prawym górnym rogu interfejsu.
- **Logowanie** – Użyj formularza logowania, aby uzyskać dostęp do funkcji zakupowych. Dane do logowania dostępne w dokumentacji Fake Shop API(https://fakestoreapi.com).
- **Katalog produktów** – Przeglądaj produkty, korzystając z filtrów, sortowania i wyszukiwania.
- **Koszyk** – Dodawaj produkty do koszyka, zarządzaj nimi i realizuj zakupy.
