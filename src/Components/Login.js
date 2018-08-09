import React from 'react';
import {connect} from 'react-redux';
import {addToken,addProfile} from '../action/index';
import '../style/login.css';

class Login extends React.Component{
    state ={
        username:'',
        password:''
    }


    handleChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3001/authenticate',{
              method:'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: this.state.username,
                password: this.state.password,
              })
          })
          .then(result => {
            
            return result.json()
          })
          .then(data =>{
            this.props.addToken(data.token);
            this.props.addProfile(data.profile);
          })
      }

    render(){
        const {username, password} = this.state;
        return(
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="container">
            <label>Login</label><br></br>
            <label>Username:
            <input type="text" value={username} id="username" placeholder="username" onChange={this.handleChange}  required/>
            </label>
            <label>Password:
            <input type="password" value={password} id="password" placeholder="password" onChange={this.handleChange} required/>
            </label>
            <button type="submit">Login</button>
        </div>
        <div className="container" style={{backgroundColor:'#f1f1f1'}}>
            <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
        </form>
    )
}
}

const mapDispatchToProps = dispatch => {
    return {
      addToken: token => dispatch(addToken(token)),
      addProfile: profile => dispatch(addProfile(profile))
    };
  }

export default connect(null,mapDispatchToProps)(Login);