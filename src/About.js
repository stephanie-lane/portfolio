import React from 'react';
import headshot from './imgs/headshot.jpg'
import './Styles/About.css'

const About = () => {
    return (
        <div id='about'>
            <div className='aboutGrid'>
                <img className='headshot' src={headshot} alt=""/>
                <div className='descriptiveWordsContainer'>
                    <div className='descriptiveWords1'>
                        <div >Web Developer</div>  
                        <div >Software Engineer</div>  
                        <div >Animal Advocate</div>  
                        <div >Volunteer</div>  
                        <div >Hiker</div>  
                        <div >Camper</div>  
                    </div>
                    <div className='descriptiveWords2'>
                        <div >Mathematician</div>  
                        <div >Musician</div>  
                        <div >Singer</div> 
                        <div >Daughter</div> 
                        <div >Sister</div> 
                    </div>
                </div>
                <div className='aboutDescription'>I am a woman who can wear many hats, but am always passionate about having a great outcome. I love creating things that not only work, and work well, but look good.</div>
            </div>
        </div>
    );
};

export default About;