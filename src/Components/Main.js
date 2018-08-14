import React from "react";
import { Switch, Route,Redirect, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Roster from "./Roster";
import Schedule from "./Schedule";
import Signup from "./Signup";
import Login from "./Login";
import Header from './Header';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, token, ...rest}) => {
  return(
    <Route sensitive
    {...rest}
    render={(props) => token
      ? (<div><Header/><Component {...props}/></div>)
      : (<Redirect to='/login' />)
    }
  />
  );
};

const mapStateToProps = state => {
  return {
          token : state.token.token
      };
}

const Main = ({token}) => (
  <main>
    <Router>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact token={token} path='/' component={Home} />
      <PrivateRoute token={token} path='/roster' component={Roster} />
      <PrivateRoute token={token} path='/schedule' component={Schedule} />
    </Switch>
    </Router>
  </main>
);

export default connect(mapStateToProps,null)(Main);
