import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import Footer from './Footer';


class App extends Component {
  constructor() {
    super() ;

    this.state = {
        sideDrawerOpen: false
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    const HomeContainer = () => (
      <>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler}/>
        {this.state.sideDrawerOpen ?
          <Backdrop click={this.backdropClickHandler} />
        :
          null
        }
        <Route exact path='/' component={About}/>
        <Footer />
      </>
    )
    const ProjectsContainer = () => (
      <>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler}/>
        {this.state.sideDrawerOpen ?
          <Backdrop click={this.backdropClickHandler} />
        :
          null
        }
        <Route path='/projects' component={Projects}/>
        <Footer />
      </>
    )

    const ContactContainer = () => (
      <>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler}/>
        {this.state.sideDrawerOpen ?
          <Backdrop click={this.backdropClickHandler} />
        :
          null
        }
        <Route path='/contact' component={Contact}/>
        <Footer />
      </>
    )


    const ResumeContainer = () => (
        <>
          <Route path='/resume' component={Resume}/>
        </>
    )

    return (
      <>
        <Switch>
          <Route exact path='/' component={HomeContainer}/>
          <Route path='/projects' component={ProjectsContainer}/>
          <Route path='/contact' component={ContactContainer}/>
          <Route path='/resume' component={ResumeContainer}/>
        </Switch>
      </>
    );
  }
}

export default App;
