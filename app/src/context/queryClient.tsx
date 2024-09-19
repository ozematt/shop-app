import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Ponawianie w przypadku niepowodzenia
      refetchOnWindowFocus: false, // Nie odświeża danych przy ponownym wejściu do okna
    },
  },
});

export default queryClient;
