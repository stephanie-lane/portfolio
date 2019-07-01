import React, { Component } from 'react';
import './Styles/Contact.css'
import favicon from './imgs/favicon.png'



class Contact extends Component {
    render() {
        return (
            <div className="contactPage">
                <div className="contactTitle">
                    <img className='contactFavicon' src={favicon} alt=""/>
                    Contact me
                </div>
                <div className='contactInfo'>
                    <div className='phoneNumber'>520-286-0841</div>
                    <div className='email'>stephlane544@gmail.com</div>
                </div>
                <div className="contactMessage">
                    <div>Talk to me about:</div>
                    <div>Jobs</div>
                    <div>Freelancing</div>
                    <div>Networking</div>
                    <div>Cats </div>
                    <img className="catImg" src="https://media1.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif?cid=790b76115d0e5b5675623138366d44c5&rid=giphy.gif" alt=""/>
                </div>
                <form className='form' action="https://formspree.io/stephlane544@gmail.com"  method="POST">
                    <input 
                        className='nameInput'
                        type="text"
                        placeholder='First Name *'
                        name='name'
                        required
                    />
                    <input 
                        className='emailInput'
                        type="email"
                        placeholder='Email *'
                        name='email'
                        required
                    />  
                    <textarea 
                        className='messageInput'
                        type="text"
                        placeholder='Message *'
                        name='message'
                        required
                        style={{filter: 'drop-shadow(5px 5px 5px #222)' }}
                    />     
                    <input 
                        className='submitButton'
                        type="submit" 
                        value="SEND " 
                        placeholder='SendMessage'/>
                </form>
            </div>
        );
    }
}

export default Contact;