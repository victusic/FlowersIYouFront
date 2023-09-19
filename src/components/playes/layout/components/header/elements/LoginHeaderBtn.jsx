import React from 'react';
import classes from './LoginHeaderBtn.module.css';
import '../../../../../styles/App.css';

const LogIn_Header_Button = () => {
    return(
        <input type="button" value='Войти' className={classes.login_header_button_style + ' yellow_button'}></input>
    )
}

export default LogIn_Header_Button;