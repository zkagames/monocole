import { Outlet, NavLink } from "react-router-dom";
import {TopLinks, MainPage} from '../style/style'

export const Layout=()=> {
    return (
      <MainPage>  
            <TopLinks>
              <img src="images/logo.png" />
              <NavLink to="/">Home</NavLink> 
              <NavLink to="/dashboard">Dashboard</NavLink>
            </TopLinks>
        <Outlet />
      </MainPage>
    );
  }