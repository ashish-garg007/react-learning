import React from 'react';
import {connect} from 'react-redux';
import {addToken,addProfile} from '../action/index';
import '../style/login.css';
import {Link} from 'react-router-dom';

class Login extends React.Component{
    state ={
        username:'',
        password:'',
        errorMessage:''
    }
    


    handleChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API_URI+'/authenticate',{
              method:'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: this.state.username,
                password: this.state.password,
              })
          })
          .then(result => {
            return result.json()
          })
          .then(data =>{
              if(data.success){
                this.props.addToken(data.token);
                this.props.addProfile(data.profile);
                this.props.history.push("/");
              }else{
                this.setState({errorMessage:'Username or Password is Incorrect'});
              }
          })
      }

    render(){
        const {username, password} = this.state;
        return(
            <div><Link to='/signup'>SignUp</Link>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="container loginBackground">
            <div className="imgcontainer"><label>Login</label></div>
            <span className="error">{this.state.errorMessage}</span><br></br>
            <input type="text" value={username} id="username" placeholder="username" onChange={this.handleChange}  required/>
            <input type="password" value={password} id="password" placeholder="password" onChange={this.handleChange} required/>
            <button type="submit">Login</button>
        </div>
        <div className="container" style={{backgroundColor:'#f1f1f1'}}>
            <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
        </form>
        </div>
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