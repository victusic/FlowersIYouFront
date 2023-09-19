import React from 'react';
import classes from './BtnStyles.module.css'

const Choice_Btn = () => {
    return(
        <input type="button" value="Выбрать" className={classes.choise_button_style + ' ' + classes.purple_button}></input>
    )
}

export default Choice_Btn;