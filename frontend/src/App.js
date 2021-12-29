import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

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
      <div className="App">
        <h1>Robot Market</h1>
        {/*Add your code here*/}
      </div>
    </QueryClientProvider>
  );
}

export default App;
