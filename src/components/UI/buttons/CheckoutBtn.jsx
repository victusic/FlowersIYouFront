import React from 'react';
import classes from './BtnStyles.module.css'

const Checkout_Btn = () => {
    return(
        <input type="button" value="Оформить заказ" className={classes.checkout_button_style + ' ' + classes.yellow_button}></input>
    )
}

export default Checkout_Btn;