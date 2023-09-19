import React from 'react';
import classes from './CategoryBtn.module.css'
import '../../../../styles/App.css';

const Category_Btn = (props) => {
    return(
        <input type="button" value={props.title} className={classes.navigate_button_style + ' nav_light_button'}></input>
    )
}

export default Category_Btn;