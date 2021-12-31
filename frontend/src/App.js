import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';
import { RecoilRoot } from "recoil";

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header></Header>
          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
