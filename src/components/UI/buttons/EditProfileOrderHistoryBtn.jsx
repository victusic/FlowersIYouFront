import React from 'react';
import classes from './BtnStyles.module.css'

const EditProfileOrderHistory_Btn = (props) => {
    return(
        <input type="button" value={props.title} className={classes.editprofileorderhistory_btn_style + ' ' + classes.purple_button}></input>
    )
}

export default EditProfileOrderHistory_Btn;