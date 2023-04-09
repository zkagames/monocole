import { Routes, Route} from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export const App =()=> {
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      </QueryClientProvider>
  );
}
