import React, { Component } from 'react';
import './Styles/Contact.css'



class Contact extends Component {
    render() {
        return (
            <form className='contactPage form' action="https://formspree.io/stephlane544@gmail.com"  method="POST">
                <input 
                    className='nameInput'
                    type="text"
                    placeholder='First Name'
                    name='name'
                    required
                />
                <input 
                    className='emailInput'
                    type="email"
                    placeholder='Email'
                    name='email'
                    required
                />  
                <textarea 
                    className='messageInput'
                    type="text"
                    placeholder='Message'
                    name='message'
                    required
                />     
                <input 
                    className='submitButton'
                    type="submit" 
                    value="Send" 
                    placeholder='SendMessage'/>

            </form>
        );
    }
}

export default Contact;