import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addToken} from '../action/index';
import '../style/header.css';


const logout = (addToken) => () =>{
    localStorage.removeItem('state');
    addToken('');
}
const mapStateToProps = state => {
    return {
            token : state.token.token,
            profile: state.profile.profile
        };
}
const mapDispatchToProps = dispatch => {
    return {
      addToken: token => dispatch(addToken(token))};
  }

const Header = ({addToken,profile}) =>(
    
    <header className='header'>
    <a href="#default" className="logo">CompanyLogo</a>
        <nav>
                <Link to='/'>Home</Link>
                <Link to='/roster'>Roster</Link>
                <Link to='/schedule'>Schedule</Link>
                <div className="header-right">
                    <p>Welcome! {profile.Name}</p>
                    <button onClick={logout(addToken)}>Logout</button>
                </div>
        </nav>
    </header>
)

export default connect(mapStateToProps,mapDispatchToProps)(Header);