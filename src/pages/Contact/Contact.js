import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="name" className="form-control" id="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="subject" className="form-control" id="subject" placeholder="Your message" />
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default Contact;