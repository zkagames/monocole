import { Routes, Route} from "react-router-dom";
import { Layout } from './Layout';
import { Home } from './Home';
import { Dashboard } from './Dashboard';

export const App =()=> {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
  );
}
