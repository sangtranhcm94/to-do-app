import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }
    
    signIn() { 
        if(this.validateForm()){
            //send info to server to check...
            
            console.log("loging by:" + this.state.email);
    
            // if status = OK: then...
            this.props.history.push('/to-do')
        }else{

        }
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
            <div id="idoFormLogin" className="container-login">
                <form >
                    <h2 style={{textAlign: 'center'}}>Please login</h2>
                    <label><b>Username</b></label>
                    <input type="text" onChange={this.handleEmailChange} placeholder="Enter Username" required/>
                    <label><b>Password</b></label>
                    <input type="password" onChange={this.handlePasswordChange} placeholder="Enter Password" required/>
                    <button className="buttonLogin" onClick={this.signIn}>
                        Sign in...
                    </button>
                </form>
            </div>
        )
    }
}