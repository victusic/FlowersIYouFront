import React from 'react';
import classes from './BtnStyles.module.css'

const AddToCart_Btn = (props) => {
    return(
        <input type="button" value={"В корзину за " + props.price + " ₽"} className={classes.addtocart_button_style + ' ' + classes.yellow_button}></input>
    )
}

export default AddToCart_Btn;