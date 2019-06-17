import React  from 'react';
import Todos from './imgs/project thumbnails/To-dos.png';
import ZenGarden from './imgs/project thumbnails/CSS Zen Garden.png';
import TriviaGame from './imgs/project thumbnails/Trivia Game.png';
import SwapMeet from './imgs/project thumbnails/SwapMeet.png';
import Noted from './imgs/project thumbnails/Noted.png';
import greyTop from './imgs/greyTop.png';
import greyBottom from './imgs/greyBottom.png';
import pinkTop from './imgs/pinkTop.png';
import pinkBottom from './imgs/pinkBottom.png';
import greenTop from './imgs/greenTop.png';
import greenBottom from './imgs/greenBottom.png';
import './Styles/Projects.css';


class Projects extends React.Component{

    render () {
        return (
            <div className='projectsPage'>
                <div className='projectGrid'>

                    
                    <div className='title swapTitle'>Swap Meet</div>
                    <div className='swapMeet'> 
                        <div className='projectInfo swapMeetInfo'>
                            <div className='description'>
                                A website app for bartering services. Users create a profile with a service they can offer to others, which will then show up in the searched services. Users can search through all of the services offered.
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, Express, MongoDB, Mongoose, HTML, CSS
                            </div>
                            <div className='exampleLogins'>
                                <div className='loginWith'>Login with:</div>
                                <div className='usernamePassword'>
                                    <div className='username'>Username: user2</div>
                                    <div className='password'>Password: 123</div>
                                </div>
                            </div>
                        </div>
                        <div className='imgAndLinks'>
                            <a href="https://swap-meet-for-freelancers.herokuapp.com/" className='swapMeetImg' target='_blank'rel="noopener noreferrer" >
                                <img src={SwapMeet} alt=""/>
                            </a>
                            <div className='links'>
                                <a href="https://swap-meet-for-freelancers.herokuapp.com/"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                <a href="https://github.com/stephlane544/swapMeet" target='_blank'rel="noopener noreferrer" > View github</a>
                            </div>
                        </div>
                    </div>




                    <img className='skewBackground greyTop' src={greyTop} alt=''/>
                    <div className='notedBackground'></div>
                    <div className='title notedTitle'>Noted</div>
                    <div className='noted'> 
                        <div className='imgAndLinks'>
                            <a href="https://noted-note-taking.herokuapp.com/" className='notedImg' target='_blank'rel="noopener noreferrer" >
                                <img src={Noted} alt=""/>
                            </a>
                            <div className='links'>
                                <a href="https://noted-note-taking.herokuapp.com/"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                <a href="https://github.com/stephlane544/Noted" target='_blank'rel="noopener noreferrer" > View github</a>
                            </div>
                        </div>
                        <div className='projectInfo notedInfo'>
                            <div className='description'>
                                Noted is an app for small notes, but it also has a collections section in which users can make a book with whatever content they would like.
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, Express, MongoDB, Mongoose, HTML, CSS
                            </div>
                            <div className='exampleLogins'>
                                <div className='loginWith'>Login with:</div>
                                <div className='usernamePassword'>
                                    <div className='username'>Username: user2</div>
                                    <div className='password'>Password: 123</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='skewBackground greyBottom' src={greyBottom} alt=''/>






                    <div className='title triviaTitle'>Trivia Game</div>
                    <div className='triviaGame'>
                        <div className='projectInfo triviaGameInfo'>
                        <div className='description'>
                            Created a trivia game using opentdb API. It randomly gives a user a question, shows the correct and incorrect answers once an answer is chosen, and keeps track of the users score. In addition, the user can search through the questions for specific words, category, difficulty level, or type.
                        </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, HTML, CSS
                            </div>
                        </div>
                        <div className='imgAndLinks'>
                            <a href="https://stephanie_lane_TriviaGame.surge.sh" className='triviaGameImg' target='_blank'rel="noopener noreferrer" >
                                <img src={TriviaGame} alt=""/>
                            </a> 
                            <div className='links'>
                                <a href="https://stephanie_lane_TriviaGame.surge.sh"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                <a href="https://github.com/stephlane544/trivia-game" target='_blank'rel="noopener noreferrer" > View github</a>
                            </div>                            </div>
                    </div>




                    <img className='skewBackground pinkTop' src={pinkTop} alt=''/>
                    <div className='todoBackground'></div>
                    <div className='title todoTitle'>To-dos</div>
                    <div className='todos'>
                        <div className='imgAndLinks'>
                            <a href="https://stephanie_lane_AxiosTo-dos.surge.sh" className='todosImg' target='_blank'rel="noopener noreferrer" >
                                <img src={Todos} alt=""/>
                            </a>
                            <div className='links'>
                                <a href="https://stephanie_lane_AxiosTo-dos.surge.sh"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                <a href="https://github.com/stephlane544/to-dos" target='_blank'rel="noopener noreferrer" > View github</a>
                            </div>                            </div>
                        <div className='projectInfo todosInfo'>
                            <div className='description'>
                                Developed a website linked to an API to get a person's to-do list. Also allowed user to post new to-do items, delete items, or mark them as complete using Axios to put these into the API
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt2'>Built using: </div>
                                HTML, CSS, and Javascript
                            </div>
                        </div>
                    </div>
                    <img className='skewBackground pinkBottom' src={pinkBottom} alt=''/>                  





                    
                    <div className='title zenTitle'>CSS Zen Garden</div>
                    <div className='zenGarden'>
                        <div className='projectInfo zenGardenInfo'>
                            <div className='description'>
                                Created a website mimicking the appearance of csszengarden.com
                            </div>
                            <div className='description'>
                                Mobile-first responsive design
                            </div>
                            <div className='builtWith'>
                                <span className='boldBuilt2'>Built using: </span>
                                HTML and CSS (grid in particular)
                            </div>
                        </div>
                        <div className='imgAndLinks'>
                            <a href="https://stephanie_lane_cssZenGarden.surge.sh" className='zenGardenImg' target='_blank'rel="noopener noreferrer" >
                                <img src={ZenGarden} alt=""/>
                            </a> 
                            <div className='links'>
                                <a href="https://stephanie_lane_cssZenGarden.surge.sh"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                <a href="https://github.com/stephlane544/css-zen-garden" target='_blank'rel="noopener noreferrer" > View github</a>
                            </div>                            </div>
                    </div>
                </div>
                










                <div id='projects2'>
                    <div className='projectGrid'>

                    <img className='skewBackground greyTop' src={greyTop} alt=''/>
                        <div className='swapBackground'></div>
                        <div className='title swapTitle'>Swap Meet</div>
                        <div className='swapMeet'> 
                            <div className='projectInfo swapMeetInfo'>
                                <div className='description'>
                                    A website app for bartering services. Users create a profile with a service they can offer to others, which will then show up in the searched services. Users can search through all of the services offered.
                                </div>
                                <div className='builtWith'>
                                    <div className='boldBuilt'>Built using: </div>
                                    React, Express, MongoDB, Mongoose, HTML, CSS
                                </div>
                                <div className='exampleLogins'>
                                    <div className='loginWith'>Login with:</div>
                                    <div className='usernamePassword'>
                                        <div className='username'>Username: user2</div>
                                        <div className='password'>Password: 123</div>
                                    </div>
                                </div>
                            </div>
                            <div className='imgAndLinks'>
                                <a href="https://swap-meet-for-freelancers.herokuapp.com/" className='swapMeetImg' target='_blank'rel="noopener noreferrer" >
                                    <img src={SwapMeet} alt=""/>
                                </a>
                                <div className='links'>
                                    <a href="https://swap-meet-for-freelancers.herokuapp.com/"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                    <a href="https://github.com/stephlane544/swapMeet" target='_blank'rel="noopener noreferrer" > View github</a>
                                </div>                                
                            </div>
                        </div>
                        <img className='skewBackground greyBottom' src={greyBottom} alt=''/>






                        
                        <div className='title notedTitle'>Noted</div>
                        <div className='noted'> 
                            <div className='projectInfo notedInfo'>
                                <div className='description'>
                                    Noted is an app for small notes, but it also has a collections section in which users can make a book with whatever content they would like.
                                </div>
                                <div className='builtWith'>
                                    <div className='boldBuilt'>Built using: </div>
                                    React, Express, MongoDB, Mongoose, HTML, CSS
                                </div>
                                <div className='exampleLogins'>
                                    <div className='loginWith'>Login with:</div>
                                    <div className='usernamePassword'>
                                        <div className='username'>Username: user2</div>
                                        <div className='password'>Password: 123</div>
                                    </div>
                                </div>
                            </div>
                            <div className='imgAndLinks'>
                                <a href="https://noted-note-taking.herokuapp.com/" className='notedImg' target='_blank'rel="noopener noreferrer" >
                                    <img src={Noted} alt=""/>
                                </a>
                                <div className='links'>
                                    <a href="https://noted-note-taking.herokuapp.com/"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                    <a href="https://github.com/stephlane544/Noted" target='_blank'rel="noopener noreferrer" > View github</a>
                                </div>                            </div>
                        </div>


                        <img className='skewBackground pinkTop' src={pinkTop} alt=''/>
                        <div className='triviaBackground'></div>
                        <div className='title triviaTitle'>Trivia Game</div>
                        <div className='triviaGame'>
                            <div className='projectInfo triviaGameInfo'>
                            <div className='description'>
                                Created a trivia game using opentdb API. It randomly gives a user a question, shows the correct and incorrect answers once an answer is chosen, and keeps track of the users score. In addition, the user can search through the questions for specific words, category, difficulty level, or type.
                            </div>
                                <div className='builtWith'>
                                    <div className='boldBuilt'>Built using: </div>
                                    React, HTML, CSS
                                </div>
                            </div>
                            <div className='imgAndLinks'>
                                <a href="https://stephanie_lane_TriviaGame.surge.sh" className='triviaGameImg' target='_blank'rel="noopener noreferrer" >
                                    <img src={TriviaGame} alt=""/>
                                </a> 
                                <div className='links'>
                                    <a href="https://stephanie_lane_TriviaGame.surge.sh"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                    <a href="https://github.com/stephlane544/trivia-game" target='_blank'rel="noopener noreferrer" > View github</a>
                                </div>                            </div>
                        </div>
                        <img className='skewBackground pinkBottom' src={pinkBottom} alt=''/>                  



                        <div className='title todoTitle'>To-dos</div>
                        <div className='todos'>
                            <div className='projectInfo todosInfo'>
                                <div className='description'>
                                    Developed a website linked to an API to get a person's to-do list. Also allowed user to post new to-do items, delete items, or mark them as complete using Axios to put these into the API
                                </div>
                                <div className='builtWith'>
                                    <div className='boldBuilt2'>Built using: </div>
                                    HTML, CSS, and Javascript
                                </div>
                            </div>
                            <div className='imgAndLinks'>
                                <a href="https://stephanie_lane_AxiosTo-dos.surge.sh" className='todosImg' target='_blank'rel="noopener noreferrer" >
                                    <img src={Todos} alt=""/>
                                </a>
                                <div className='links'>
                                    <a href="https://stephanie_lane_AxiosTo-dos.surge.sh"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                    <a href="https://github.com/stephlane544/to-dos" target='_blank'rel="noopener noreferrer" > View github</a>
                                </div>                            </div>
                        </div>



                        <img className='skewBackground greenTop' src={greenTop} alt=''/>
                        <div className='zenGardenBackground'></div>
                        <div className='title zenTitle'>CSS Zen Garden</div>
                        <div className='zenGarden'>
                            <div className='projectInfo zenGardenInfo'>
                                <div className='description'>
                                    Created a website mimicking the appearance of csszengarden.com
                                </div>
                                <div className='description'>
                                    Mobile-first responsive design
                                </div>
                                <div className='builtWith'>
                                    <span className='boldBuilt2'>Built using: </span>
                                    HTML and CSS (grid in particular)
                                </div>
                            </div>
                            <div className='imgAndLinks'>
                                <a href="https://stephanie_lane_cssZenGarden.surge.sh" className='zenGardenImg' target='_blank'rel="noopener noreferrer" >
                                    <img src={ZenGarden} alt=""/>
                                </a> 
                                <div className='links'>
                                    <a href="https://stephanie_lane_cssZenGarden.surge.sh"  target='_blank'rel="noopener noreferrer" > View live site</a>
                                    <a href="https://github.com/stephlane544/css-zen-garden" target='_blank'rel="noopener noreferrer" > View github</a>
                                </div>                            </div>
                        </div>
                        <img className='skewBackground greenBottom' src={greenBottom} alt=''/>
                    </div> 
                </div>
            </div>
        );
    };
};

export default Projects;