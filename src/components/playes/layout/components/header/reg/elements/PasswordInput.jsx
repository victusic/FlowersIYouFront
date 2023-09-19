import React from 'react';
import classes from './ClassicInput.module.css'

const Password = (props) => {
    return(
        <div className={classes.playa_input_style + ' ' + classes.PasswordInput}>
            <div className={classes.text_on_input_style}>{props.title}</div>
            <input type="password" className={classes.classic_input_style} disabled={props.static}></input>
        </div>
        
    )
}

export default Password;