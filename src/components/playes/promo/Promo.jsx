import React from 'react';
import classes from './Promo.module.css'
import Promo_Btn from './elements/PromoBtn';

const Promo = (props) => {
    return(
        <div className={classes.playa_promo_style}>
            <div className={classes.plate}>
                <div className={classes.inline_style}>
                    <label className={classes.promo_text_style}>{props.text}</label>
                    <Promo_Btn/>
                </div>
                
            </div>
        </div>
    )
}

export default Promo;