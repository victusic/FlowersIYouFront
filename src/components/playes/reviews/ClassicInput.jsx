import React from 'react';
import classes from './ClassicInput.module.css'

const Classic_Input = (props) => {
    return(
        <div className={classes.playa_input_style}>
            <div className={classes.text_on_input_style} style={{color: props.color}}>{props.title}</div>
            <input type="text" className={classes.classic_input_style} style={{color: props.color}}></input>
        </div>
        
    )
}

export default Classic_Input;