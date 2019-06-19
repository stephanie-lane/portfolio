import React from 'react';
import headshot from './imgs/headshot.jpg'
import './Styles/About.css'

const About = () => {
    return (
        <div id='about'>
            <div className='aboutGrid'>
                <img className='headshot' src={headshot} alt=""/>
                <div className='descriptiveWords'>
                    - 
                    <span className='pinkText'>Web Developer</span> - 
                    <span className='orangeText'>Software Engineer</span> - 
                    <span className='greenText'>Animal Advocate</span> - 
                    <span className='pinkText'>Volunteer</span> - 
                    <span className='orangeText'>Hiker</span> - 
                    <span className='greenText'>Camper</span> - 
                    <span className='orangeText'>Mathematician</span> - 
                    <span className='pinkText'>Musician</span> - 
                    <span className='greenText'>Singer</span> -
                    <span className='orangeText'>Daughter</span> -
                    <span className='pinkText'>Sister</span> -
                </div>
                <div className='description'>I am a woman who can wear many hats, but am always passionate about having a great outcome. I love creating things that not only work, and work well, but look good.</div>
            </div>
        </div>
    );
};

export default About;