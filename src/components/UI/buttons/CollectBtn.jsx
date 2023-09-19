import React from 'react';
import classes from './BtnStyles.module.css'

const Collect_Btn = () => {
    return(
        <input type="button" value="Собрать" className={classes.collect_button_style + ' ' + classes.gray_button}></input>
    )
}

export default Collect_Btn;