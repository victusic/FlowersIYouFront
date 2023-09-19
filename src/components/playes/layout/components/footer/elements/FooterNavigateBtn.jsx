import React from 'react';
import classes from './FooterNavigateBtn.module.css';
import '../../../../../styles/App.css';


const Footer_Navigate_Btn = (props) => {
    return(
        <div className={classes.footer_navigate_box_for_button_style}>
            <input type="button" value={props.title} className={classes.footer_navigate_button_style + ' nav_dark_button'}></input>
        </div>
    )   
}

export default Footer_Navigate_Btn;