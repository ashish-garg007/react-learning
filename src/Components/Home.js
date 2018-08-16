import React from "react";
import {connect} from 'react-redux';


const mapStateToProps = state => {
  return{token: state.token}
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to react router test new</h1>
    </div>
  );
};

export default connect(mapStateToProps,null)(Home);
