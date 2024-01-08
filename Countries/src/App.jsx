import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Homepage from "./pages/Homepage";
import CountryPage from "./pages/CountryPage";
import PageNotFound from "./pages/PageNotFound";
import { CountryProvider } from "./CountryContext";

const queryClient = new QueryClient();

function App() {
  return (
    <CountryProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/country-details/:officialName"
              element={<CountryPage />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CountryProvider>
  );
}

export default App;
