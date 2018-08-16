import React from 'react';
import {connect} from 'react-redux';

class Signup extends React.Component{
    state={
        name:'',
        email:'',
        password:''
    }

    handleChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API_URI+'/signup',{
              method:'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: this.state.name,
                password: this.state.password,
                email: this.state.email
              })
          })
          .then(result => {
            return result.json()
          })
          .then(data =>{
              if(data.success){
                this.props.history.push("/");
              }else{
                this.setState({errorMessage:'Some error in save data'});
              }
          })
      }

    render(){
        const {name,email,password} = this.state;
        return(
            <form onSubmit={this.handleSubmit.bind(this)} style={{border:'1px solid #ccc'}}>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                 <label ><b>Name</b></label>
                <input type="text" value={name} placeholder="Enter Name" id="name" name="name" onChange={this.handleChange} required/>

                <label ><b>Email</b></label>
                <input type="text" value={email} placeholder="Enter Email" id="email" name="email" onChange={this.handleChange} required/>

                <label ><b>Password</b></label>
                <input type="password" value={password} placeholder="Enter Password" id="password" onChange={this.handleChange} name="psw" required/>

                <label ><b>Repeat Password</b></label>
                <input type="password" value={password} placeholder="Repeat Password" name="psw-repeat" required/>

                {/* <label>
                <input type="checkbox" checked="checked" name="remember" style={{marginBottom:'15px'}}/> Remember me
                </label> */}

                <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
            </form>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
    };
  }

export default connect(null,mapDispatchToProps)(Signup);