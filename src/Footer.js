import React from 'react';
import './Styles/Footer.css'


class Contact extends React.Component{
    render () {
        return (
            <div id='footer'>
                <div className='footerBackground'></div>
                <div className='topspacing'></div>
                <div className='footerTitle'>Contact Me</div>
                <div className='phoneNumber'>520-286-0841</div>
                <div className='email'>stephlane544@gmail.com</div>
                <a href='/contact' className='footerLinks sendToContact' to='/contact'>Click here to leave me a message.</a>
                <div className='checkOutContainer'>
                    <div className='checkOutText'>Check me out on:</div>
                    <a href="https://twitter.com/StephLane544" className='twitterContainer footerLinks' target='_blank'rel="noopener noreferrer" >
                        <div>Twitter</div>
                        <img id="twitter" src="https://img.icons8.com/ios/50/000000/twitter-filled.png" alt=""/>
                    </a>
                    <a href="https://github.com/stephlane544/" className='gitContainer footerLinks' target='_blank'rel="noopener noreferrer" >
                        <div>Github</div>
                        <img id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/stephanie--lane/" className='linkedinContainer footerLinks' target='_blank'rel="noopener noreferrer" >
                        <div>LinkedIn</div>
                        <img id="linkedIn" src="https://img.icons8.com/ios/50/000000/linkedin-filled.png" alt=""/>
                    </a>
                </div>
                <div className='bottomspacing'></div>
            </div>
        );
    }
};

export default Contact;