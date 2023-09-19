import React from 'react';
import classes from './BtnStyles.module.css'

const GoToCatalogAboutUs_Btn = () => {
    return(
        <input type="button" value="Перейти в каталог" className={classes.goToCatalogAboutUs_button_style + ' ' + classes.yellow_button}></input>
    )
}

export default GoToCatalogAboutUs_Btn;