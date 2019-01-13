import React, { Component } from "react";
import { Button } from "react-materialize";

class Contact extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleFirstNameChange (event) {
      this.setState({
          firstName: event.target.value
      })
    }
    handleLastNameChange (event) {
        this.setState({
            lastName: event.target.value
        })
    }
    handleEmailChange (event) {
        this.setState({
            email: event.target.value
        })
    }
    handleMessageChange (event) {
        this.setState({
            message: event.target.value
        })
    }
    handleSubmit = async event => {
        alert("You submitted.")
        let f = this.state.firstName
        let l = this.state.lastName
        let e = this.state.email
        let m = this.state.message
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        })
        event.preventDefault();
        const response = await fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                firstName: f,
                lastName: l,
                email: e,
                message: m
            })
        })
    }
    
    render() {
        return (
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                                <label for="first_name" >First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" value={this.state.lastName} onChange={this.handleLastNameChange}/>
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="text" className="validate" value={this.state.email} onChange={this.handleEmailChange}/>
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="comments" type="text" className="validate" value={this.state.message} onChange={this.handleMessageChange}/>
                                <label for="comments">Message</label>
                            </div>
                        </div>
                        <Button>Submit</Button>
                    </form>
                </div>
        )
    }
}
export default Contact;