import React, { Component } from 'react';
import axios from 'axios';
const API_PATH = 'http://localhost:3000/portfolio/api/contact/index.php';



class Contact extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            email: '',
            message:'',
            mailSent: false,
            error: null
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
        .then(result => {
            this.setState({
            mailSent: result.data.sent
            })
        })
        .catch(error => this.setState({ error: error.message }));
    }

    render() {
        return (
            <form className='contactPage form' action="/action_page.php" >
            <input type="text"
                placeholder='First Name'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                required
            />
            <input type="text"
                placeholder='Email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                required
            />  
            <textarea type="text"
                placeholder='Message'
                name='message'
                value={this.state.message}
                onChange={this.handleChange}
                required
            />           
            <button className='submitButton'>Send Message</button>
            <div>
                {this.state.mailSent &&
                    <div>Thank you for contcting us.</div>
                }
            </div>
        </form>
        );
    }
}

export default Contact;