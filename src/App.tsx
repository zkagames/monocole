import { Routes, Route} from "react-router-dom";
import { Layout } from './components/Layout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { PAGES } from "./utils/consts";
import { ReactNode, createContext } from "react";
import React from "react";

export const UserContext = createContext<{user:string} | undefined>(undefined);

export const App =()=> {
  return (
    <UserContext.Provider value={{user: 'A'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
          <Route path="/" element={<Layout />}>
            {PAGES.map(page=>{
                  const {path, display, render} = page;
                  const pathProp = path ? {path} : {index: true};
                  return <Route key={display} {...pathProp} element={render() as ReactNode} />
            })}  
          </Route>
        </Routes>
      </LocalizationProvider>
    </UserContext.Provider>
  );
}
