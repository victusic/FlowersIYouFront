import React from 'react';
import cl from './LoginModal.module.css';
import '../../../../../styles/App.css';
import LogSignIn_Button from './elements/LogSignInButton';
import NoAccountSignUp_Btn from './elements/NoAccountSignUpBtn';
import LoginInput from './elements/LoginInput';
import PasswordInput from './elements/PasswordInput';
import CloseBtn from './elements/CloseBtn';


const LoginModal = ({isVisible = false, onClose }) => {
    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
            onClose();
            break;
            default:
        }
    };
    
    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className='fog' onClick={onClose}>
            <div className={cl.modal_playa_style} onClick={e => e.stopPropagation()}>
                <button onClick={onClose}><CloseBtn onClick={onClose}/></button>
                <div className={cl.modal_tile_style}>Вход на сайт</div>
                <div className={cl.modal_text_style}>Сохраним адрес доставки, расскажем про акции, подарим подарок на день рождения</div>
                <LoginInput title="Логин, адрес почты или номер телефона"/>
                <PasswordInput title="Пароль"/>
                <LogSignIn_Button title="Войти"/>
                <NoAccountSignUp_Btn/>
            </div>
        </div>
        
    )
}

export default LoginModal;