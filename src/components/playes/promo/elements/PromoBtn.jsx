import React from 'react';
import classes from './PromoBtn.module.css'
import '../../../styles/App.css';

const Promo_Btn = () => {
    return(
        <input type="button" value="Заказать" className={classes.promo_button_style + ' purple_button'}></input>
    )
}

export default Promo_Btn;