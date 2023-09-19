import React from 'react';
import '../../../../../../styles/App.css';
import classes from './LogSignInButton.module.css';

const LogSignIn_Button = (props) => {
    return(
        <input type="button" value={props.title} className={classes.logsignin_button_style + ' yellow_button'}></input>
    )
}

export default LogSignIn_Button;