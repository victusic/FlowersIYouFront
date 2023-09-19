import React from 'react';
import classes from './FooterInfoBtn.module.css';
import '../../../../../styles/App.css';

const Footer_Info_Btn = (props) => {
    return(
        <div className={classes.footer_info_box_for_button_style}>
            <input type="button" value={props.title} className={classes.footer_info_button_style + ' nav_dark_button'}></input>
        </div>
    )   
}

export default Footer_Info_Btn;