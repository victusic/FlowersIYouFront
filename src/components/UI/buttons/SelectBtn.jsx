import React from 'react';
import classes from './BtnStyles.module.css'

const Select_Btn = () => {
    return(
        <input type="button" value="Выбрать" className={classes.select_btn_style + ' ' + classes.yellow_button}></input>
    )
}

export default Select_Btn;