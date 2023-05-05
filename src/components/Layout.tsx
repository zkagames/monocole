import { Outlet, NavLink } from "react-router-dom";
import {TopLinks, MainPage, TopTabs} from '../style/style'
import { PAGES } from "../utils/consts";
import { useContext } from "react";
import { UserContext } from "../App";

export const Layout=()=> {
  const userDetails = useContext(UserContext);
  
  return (
      <MainPage>  
            <TopTabs>
              <TopLinks>
                <img src="images/logo.png" />
                {PAGES.map(page=>{
                  const {path = '/', display} = page;
                  return <NavLink key={display} to={path}>{display}</NavLink> }
                  )}   
              </TopLinks>
              <div>{userDetails?.user}</div>
            </TopTabs>        
        <Outlet />
      </MainPage>
    );
  }