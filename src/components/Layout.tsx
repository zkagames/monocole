import { Outlet, NavLink } from "react-router-dom";
import {TopLinks, MainPage} from '../style/style'

export const Layout=()=> {
    return (
      <MainPage>  
            <TopLinks>
              <img src="images/logo.png" />
              <NavLink to="/">Daily Events</NavLink> 
              <NavLink to="/all">All Events</NavLink>
            </TopLinks>
        <Outlet />
      </MainPage>
    );
  }