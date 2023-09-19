import React from 'react';
import classes from './BtnStyles.module.css'

const GoToCatalogAboutDelivery_Btn = () => {
    return(
        <input type="button" className={classes.gotocatalogaboutdelivery_btn + ' ' + classes.yellow_button} value='Перейти в каталог'></input>
    )
}

export default GoToCatalogAboutDelivery_Btn;