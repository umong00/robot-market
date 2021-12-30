import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header></Header>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
