import { Outlet, Link } from "react-router-dom";
import {TopLinks, Page} from '../style/style'

export const Layout=()=> {
    return (
      <Page>
        <h3>App</h3>
            <TopLinks>
              <Link to="/">Home</Link> 
              <Link to="/dashboard">Dashboard</Link>
            </TopLinks>
        <Outlet />
      </Page>
    );
  }