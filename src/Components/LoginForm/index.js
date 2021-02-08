import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './style.css';

class LoginForm extends Component {
    
    state = {
        nome:""
    }

    formProcess =  event => {
        event.preventDefault();
        console.log('enviou');
    
        this.props.history.push("/pictures/111");
     
    }

    setNome = event => {
        this.setState({nome: event.target.value});
    }

    render(){
        return(
            <div className="container-login">
                <h1> Seja bem vindo!</h1>
                <form className="form-login" onSubmit= { (e) => this.formProcess(e) }>
                    <input type="text" className="form-login-user" onChange= { this.setNome } />
                    <input type="submit" value="Entrar" className="form-login-submit"/>
                </form>
            </div>
        )
    }
   
}



export default withRouter(LoginForm);