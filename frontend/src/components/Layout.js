import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from "./Header"
import Home from './Home'

function Layout() {
    return (
        <Router>
            <Header /> 
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
  }
  
export default Layout;