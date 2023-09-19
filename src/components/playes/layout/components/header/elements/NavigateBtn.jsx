import React from 'react';
import classes from './NavigateBtn.module.css'
import { NavLink } from 'react-router-dom';
import '../../../../../styles/App.css';

const Navigate_Btn = (props) => {
    return(
        <div className={classes.navigate_box_for_button_style}>
            <NavLink to={props.link} className={classes.link_button_style + ' nav_light_button'}>{props.title}</NavLink>
        </div>
    )
}

export default Navigate_Btn;