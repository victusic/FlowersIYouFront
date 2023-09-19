import React from 'react';
import classes from './Header.module.css'
import Navigate_Btn from './elements/NavigateBtn';
import LogIn_Header_Button from './elements/LoginHeaderBtn';
import logo from './elements/logo.png';
import phone_icon from './elements/phone.png';
import LoginModal from './login/LoginModal.jsx';
import RegModal from './reg/RegModal.jsx';

const Header = () => {
    const [isModal, setModal] = React.useState(false);
    return(
        <header className={classes.playa_header_style}>
            <div className={classes.plate}>
                <div className={classes.logo_playa_header_style}>
                    <img className={classes.logo_img_style} src={logo} alt='FLOWERS & YOU'></img>
                    <label className={classes.logo_title_style}>FLOWERS & YOU</label>
                </div>
                <div className={classes.btns_header_plate_styles}>
                    <Navigate_Btn title="Главная" link="/"/>
                    <Navigate_Btn title="О нас" link="/about"/>
                    <Navigate_Btn title="Доставка" link="/delivery"/>
                    <Navigate_Btn title="Отзывы" link="/reviews"/>
                </div>
                <img className={classes.phone_img_style} src={phone_icon} alt='Иконка телефона'></img>
                <label className={classes.phone_number_label_style}>+7(953)-071-66-95</label>
                <button onClick={() => setModal(true)}><LogIn_Header_Button /></button>
                
                <RegModal isVisible={isModal} onClose={() => setModal(false)} />
                
            </div>
        </header>
    )
}

export default Header;