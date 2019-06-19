import React from "react";
import "./Styles/SideDrawer.css";


const SideDrawer = (props) => {

    let drawerClasses = "sideDrawer";
    if (props.show) {
        drawerClasses = "sideDrawer open";
    }

    return  (
        <div className={drawerClasses}>
            <ul><a href='/' className='links navHome'  to='/' onClick={props.drawerClickHandler}>Home</a></ul>
            <ul><a href='/projects' className='links navProjects'  to='/projects'  onClick={props.drawerClickHandler}>Projects</a></ul>
            <ul><a href='/resume' className='links navResume'  to='/resume' onClick={props.drawerClickHandler}>Resume</a></ul>
            <ul><a href='/contact' className='links navContact' to='/contact' onClick={props.drawerClickHandler}>Contact</a></ul>
        </div>
    )
}

export default SideDrawer;