import React from 'react';
// import Header from './Components/Header';
import Main from './Components/Main';
// import Login from './Components/Login';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
  return{token: state.token.token}
}

class App extends React.Component {
  
  render(){
    // const token = this.props.token;

    // let comp;
    // if(token){
    //   comp = <div><Header/><Main/></div>
    // }else{
    //   comp = <Login/>
    // }
    return(
      <div>
      <Main/>
      </div>
    );
}
};
export default withRouter(connect(mapStateToProps)(App));
