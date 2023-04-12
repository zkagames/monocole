import { Routes, Route} from "react-router-dom";
import { Layout } from './components/Layout';
import { Events } from './components/Events';
import { AllEventsTable } from './components/AllEventsTable';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const App =()=> {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Events />} />
          <Route path="all" element={<AllEventsTable />} />
        </Route>
      </Routes>
    </LocalizationProvider>
  );
}
