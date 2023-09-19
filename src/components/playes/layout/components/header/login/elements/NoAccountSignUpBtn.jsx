import React from 'react';
import classes from './NoAccountSignUpBtn.module.css'

const NoAccountSignUp_Btn = () => {
    return(
        <input type="button" value="Нет аккаунта? Зарегистрироваться" className={classes.noAccountSignUp_button_style}></input>
    )
}

export default NoAccountSignUp_Btn;