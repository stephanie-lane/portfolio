import React  from 'react';
import Todos from './imgs/projectThumbnails/To-dos.png';
import ZenGarden from './imgs/projectThumbnails/CSS Zen Garden.png';
import TriviaGame from './imgs/projectThumbnails/Trivia Game.png';
import SwapMeet from './imgs/projectThumbnails/SwapMeet.png';
import Noted from './imgs/projectThumbnails/Noted.png';
import greyTop from './imgs/skewBackgrounds/greyTop.png';
import greyBottom from './imgs/skewBackgrounds/greyBottom.png';
import mintTop from './imgs/skewBackgrounds/mintTop.png';
import mintBottom from './imgs/skewBackgrounds/mintBottom.png';
import './Styles/Projects.css';


class Projects extends React.Component{

    render () {
        return (
            <div className='projectsPage'>
                <div id='projects'>
                    <div className='projectGrid'>

                        
                        <div className='title swapTitle'>Swap Meet</div>
                        <div className='swapMeet projectContainer'> 
                            <div className='description'>
                                A website app for bartering services. Users create a profile with a service they can offer to others, which will then show up in the searched services. 
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, Express, MongoDB, Mongoose, HTML, CSS
                            </div>
                            <div className='usernamePassword'>
                                <div className='username'>Username: user</div>
                                <div className='password'>Password: 123</div>
                            </div>
                            <a href="https://swap-meet-for-freelancers.herokuapp.com/" className='swapMeetImg projectImg' target='_blank'rel="noopener noreferrer" >
                                <img className='swapImg' src={SwapMeet} alt=""/>
                            </a>
                            <div className='projectLinks'>
                                <a href="https://swap-meet-for-freelancers.herokuapp.com/"  target='_blank'rel="noopener noreferrer" > 
                                    <button className='projectButtons'>View live site</button>
                                </a>
                                <a href="https://github.com/stephlane544/swapMeet" target='_blank'rel="noopener noreferrer" > 
                                    <button className='projectButtons'>View github</button>
                                </a>
                            </div>
                        </div>




                        <img className='skewBackground greyTop' src={greyTop} alt=''/>
                        <div className='notedBackground'></div>
                        <div className='title notedTitle'>Noted</div> 
                        <div className='noted projectContainer'> 
                            <div className='description'>
                                Noted is an app for small notes, but it also has a collections section in which users can make a book with whatever content they would like.
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, Express, MongoDB, Mongoose, HTML, CSS
                            </div>
                            <div className='usernamePassword'>
                                <div className='username'>Username: user2</div>
                                <div className='password'>Password: 123</div>
                            </div>
                            <a href="https://noted-note-taking.herokuapp.com/" className='notedImg projectImg' target='_blank'rel="noopener noreferrer" >
                                <img className='notedImg' src={Noted} alt=""/>
                            </a>
                            <div className='projectLinks'>
                                <a href="https://noted-note-taking.herokuapp.com/"  target='_blank'rel="noopener noreferrer" > 
                                    <button className='projectButtons'>View live site</button>
                                </a>
                                <a href="https://github.com/stephlane544/Noted" target='_blank'rel="noopener noreferrer" > 
                                    <button className='projectButtons'>View github</button>
                                </a>
                            </div>
                        </div>
                        <img className='skewBackground greyBottom' src={greyBottom} alt=''/>






                        <div className='title triviaTitle'>Trivia Game</div>
                        <div className='triviaGame projectContainer'>
                            <div className='description'>
                                Created a trivia game using opentdb API. It randomizes questions, shows correct and incorrect answers, and keeps track of the user's score.
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, HTML, CSS
                            </div>
                            <a href="https://stephanie_lane_TriviaGame.surge.sh" className='triviaGameImg projectImg' target='_blank'rel="noopener noreferrer" >
                                <img className='triviaImg' src={TriviaGame} alt=""/>
                            </a> 
                            <div className='projectLinks'>
                                <a href="https://stephanie_lane_TriviaGame.surge.sh"  target='_blank'rel="noopener noreferrer" >
                                    <button className='projectButtons'>View live site</button>
                                </a>
                                <a href="https://github.com/stephlane544/trivia-game" target='_blank'rel="noopener noreferrer" >
                                    <button className='projectButtons'>View github</button>
                                </a>
                            </div>                            
                        </div>




                        <img className='skewBackground mintTop' src={mintTop} alt=''/>
                        <div className='todoBackground'></div>
                        <div className='title todoTitle'>To-dos</div>
                        <div className='todos projectContainer'>                 
                            <div className='description'>
                                Developed a website linked to an API to get a person's to-do list. Also allowed user to post new to-do items, delete items, or mark them as complete using Axios to put these into the API
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt2'>Built using: </div>
                                HTML, CSS, and Javascript
                            </div>
                            <a href="https://stephanie_lane_AxiosTo-dos.surge.sh" className='todosImg projectImg' target='_blank'rel="noopener noreferrer" >
                                <img className='todosImg' src={Todos} alt=""/>
                            </a>
                            <div className='projectLinks'>
                                <a href="https://stephanie_lane_AxiosTo-dos.surge.sh"  target='_blank'rel="noopener noreferrer" > 
                                    <button className='projectButtons'>View live site</button>
                                </a>
                                <a href="https://github.com/stephlane544/to-dos" target='_blank'rel="noopener noreferrer" > 
                                    <button className='projectButtons'>View github</button>
                                </a>
                            </div>           
                        </div>
                        <img className='skewBackground mintBottom' src={mintBottom} alt=''/>                  





                        
                        <div className='title zenTitle'>CSS Zen Garden</div>
                        <div className='zenGarden projectContainer'>
                            <div className='description'>
                                Created a website mimicking the appearance of csszengarden.com
                            </div>
                            <div className='builtWith'>
                                <span className='boldBuilt2'>Built using: </span>
                                HTML and CSS (grid in particular)
                            </div>
                            <a href="https://stephanie_lane_cssZenGarden.surge.sh" className='zenGardenImg projectImg' target='_blank'rel="noopener noreferrer" >
                                <img className='zenImg' src={ZenGarden} alt=""/>
                            </a> 
                            <div className='projectLinks'>
                                <a href="https://stephanie_lane_cssZenGarden.surge.sh"  target='_blank'rel="noopener noreferrer" > 
                                    <button className='projectButtons'>View live site</button>
                                </a>
                                <a href="https://github.com/stephlane544/css-zen-garden" target='_blank'rel="noopener noreferrer" > 
                                    <button className='projectButtons'>View github</button>
                                </a>
                            </div>                            
                        </div>
                    </div> 
                </div>
            </div>
        );
    };
};

export default Projects;