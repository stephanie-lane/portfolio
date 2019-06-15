import React  from 'react';
import Todos from './project thumbnails/To-dos.png';
import ZenGarden from './project thumbnails/CSS Zen Garden.png';
import TriviaGame from './project thumbnails/Trivia Game.png';
import SwapMeet from './project thumbnails/SwapMeet.png';
import Noted from './project thumbnails/Noted.png';
import skewTopBackground from './skewTopBackground.png';
import skewBottomBackground from './skewBottomBackground.png';
import './Styles/Projects.css';


class Projects extends React.Component{
    swapGit = () => {
        window.open("https://github.com/stephlane544/swapMeet");
    }

    notedGit = () => {
        window.open("https://github.com/stephlane544/Noted");
    }
    
    triviaGit = () => {
        window.open("https://github.com/stephlane544/trivia-game");
    }

    todoGit = () => {
        window.open("https://github.com/stephlane544/to-dos");
    }

    zenGardenGit = () => {
        window.open("https://github.com/stephlane544/css-zen-garden");
    }

    render () {
        return (
            <>
                <div id='projects'>
                    
                    <div className='projectGrid'>

                        <img className='skewTopBackground1' src={skewTopBackground} alt=''/>
                        <div className='swapBackground'></div>
                        <div className='swapMeet'> 
                            <div className='title'>Swap Meet</div>
                            <div className='projectInfo swapMeetInfo'>
                                <div className='description'>
                                    A website app for bartering services. Users create a profile with a service they can offer to others, which will then show up in the searched services. Users can search for others services, and can use the app to barter their services or can call/email the user directly for services.
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
                                <img onClick={this.swapGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                                
                            </div>
                        </div>
                        <img className='skewBottomBackground1' src={skewBottomBackground} alt=''/>


                        <div className='noted'> 
                            <div className='title'>Noted</div>
                            <div className="imgLoginContainer">
                                <a href="https://noted-note-taking.herokuapp.com/" className='notedImg' target='_blank'rel="noopener noreferrer" >
                                    <img src={Noted} alt=""/>
                                </a>
                                <div className='exampleLogins'>
                                    <div className='loginWith'>Login with:</div>
                                    <div className='usernamePassword'>
                                        <div className='username'>Username: user2</div>
                                        <div className='password'>Password: 123</div>
                                    </div>
                                </div>
                            </div>
                            <div className='projectInfo notedInfo'>
                            <div className='titleContainer'>
                                    <img onClick={this.notedGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                                </div>
                                <div className='description'>
                                    Noted is an app for small notes, but it also has a collections section in which users can make a book with whatever content they would like.
                                </div>
                                <div className='builtWith'>
                                    <div className='boldBuilt'>Built using: </div>
                                    React, Express, MongoDB, Mongoose, HTML, CSS
                                </div>
                            </div>
                        </div>




                        <div className='triviaBackground'></div>
                        
                        <div className='triviaGame'>
                            <div className='projectInfo triviaGameInfo'>
                            <div className='titleContainer'>
                                <div className='title'>Trivia Game</div>
                            </div>
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
                                <img onClick={this.triviaGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                            </div>
                        </div>
                    </div>                   


                    
                    <div className='projectGrid2'>


                        <div className='todos'>
                            <a href="https://stephanie_lane_AxiosTo-dos.surge.sh" className='todosImg' target='_blank'rel="noopener noreferrer" >
                                <img src={Todos} alt=""/>
                            </a>
                            <div className='projectInfo todosInfo'>
                            <div className='titleContainer'>
                                    <div className='title'>To-dos</div>
                                    <img onClick={this.todoGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                                </div>
                                <div className='description'>
                                    Developed a website linked to an API to get a person's to-do list. Also allowed user to post new to-do items, delete items, or mark them as complete using Axios to put these into the API
                                </div>
                                <div className='builtWith'>
                                    <div className='boldBuilt2'>Built using: </div>
                                    HTML, CSS, and Javascript
                                </div>
                            </div>
                        </div>




                        <div className='zenGarden'>
                            <div className='projectInfo zenGardenInfo'>
                            <div className='titleContainer'>
                                    <div className='title'>CSS Zen Garden</div>
                                    <img onClick={this.zenGardenGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                                </div>
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
                            <a href="https://stephanie_lane_cssZenGarden.surge.sh" className='zenGardenImg' target='_blank'rel="noopener noreferrer" >
                                <img src={ZenGarden} alt=""/>
                            </a> 
                        </div>

                    </div>
                    <img className='skewTopBackground2' src={skewTopBackground} alt=''/>
                </div>


                <div id='projects2'>
                    <img className='skewTopBackground1' src={skewTopBackground} alt=''/>
                    <div className='projectGrid'>

                        <div className='swapMeet'> 
                            <div className='projectInfo swapMeetInfo'>
                            <div className='titleContainer'>
                                    <div className='title'>Swap Meet</div>
                                    <img onClick={this.swapGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                                </div>
                                <div className='description'>
                                    A website app for bartering services. Users create a profile with a service they can offer to others, which will then show up in the searched services. Users can search for others services, and can use the app to barter their services or can call/email the user directly for services.
                                </div>
                                <div className='collaborators'>In collaboration with Madison Porter</div>
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
                            <a href="https://swap-meet-for-freelancers.herokuapp.com/" className='swapMeetImg' target='_blank'rel="noopener noreferrer" >
                                <img src={SwapMeet} alt=""/>
                            </a>
                        </div>




                        <div className='noted'> 
                            <div className='projectInfo notedInfo'>
                            <div className='titleContainer'>
                                    <div className='title'>Noted</div>
                                <img onClick={this.notedGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                                </div>
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
                            <a href="https://noted-note-taking.herokuapp.com/" className='notedImg' target='_blank'rel="noopener noreferrer" >
                                <img src={Noted} alt=""/>
                            </a>
                        </div>




                        <div className='triviaGame'>
                            <div className='projectInfo triviaGameInfo'>
                            <div className='titleContainer'>
                                    <div className='title'>Tivia Game</div>
                                    <img onClick={this.triviaGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                                </div>
                                <div className='description'>
                                    Created a trivia game using opentdb API. It randomly gives a user a question, shows the correct and incorrect answers once an answer is chosen, and keeps track of the users score. In addition, the user can search through the questions for specific words, category, difficulty level, or type.
                                </div>
                                <div className='builtWith'>
                                    <div className='boldBuilt'>Built using: </div>
                                    React, HTML, CSS
                                </div>
                            </div>
                            <a href="https://stephanie_lane_TriviaGame.surge.sh" className='triviaGameImg' target='_blank'rel="noopener noreferrer" >
                                <img src={TriviaGame} alt=""/>
                            </a> 
                        </div>


                    </div>
                    <img className='skewBottomBackground' src={skewBottomBackground} alt=''/>
                    <div className='projectGrid2'>


                        <div className='todos'>
                            <div className='projectInfo todosInfo'>
                            <div className='titleContainer'>
                                    <div className='title'>To-dos</div>
                                    <img onClick={this.todoGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                                </div>
                                <div className='description'>
                                    Developed a website linked to an API to get a person's to-do list. Also allowed user to post new to-do items, delete items, or mark them as complete using Axios to put these into the API
                                </div>
                                <div className='builtWith'>
                                    <div className='boldBuilt2'>Built using: </div>
                                    HTML, CSS, and Javascript
                                </div>
                            </div>
                            <a href="https://stephanie_lane_AxiosTo-dos.surge.sh" className='todosImg' target='_blank'rel="noopener noreferrer" >
                                <img src={Todos} alt=""/>
                            </a>
                        </div>


                        <div className='divider3'></div>


                        <div className='zenGarden'>
                            <div className='projectInfo zenGardenInfo'>
                            <div className='titleContainer'>
                                    <div className='title'>CSS Zen Garden</div>
                                    <img onClick={this.zenGardenGit} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                                </div>
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
                            <a href="https://stephanie_lane_cssZenGarden.surge.sh" className='zenGardenImg' target='_blank'rel="noopener noreferrer" >
                                <img src={ZenGarden} alt=""/>
                            </a> 
                        </div>

                        
                    </div>
                    <img className='skewTopBackground2' src={skewTopBackground} alt=''/>
                </div>
            </>
        );
    };
};

export default Projects;