import React from 'react';
import classes from './Footer.module.css'
import Footer_Navigate_Btn from './elements/FooterNavigateBtn';
import Footer_Info_Btn from './elements/FooterInfoBtn';

const Footer = () => {
    return(
        <footer className={classes.playa_footer_style}>
             <div className={classes.plate}>
                <div className={classes.line1_style}>
                    <div className={classes.navigate_footer_btns_styles}>
                        <Footer_Navigate_Btn title="Главная"/>
                        <Footer_Navigate_Btn title="О нас"/>
                        <Footer_Navigate_Btn title="Доставка"/>
                        <Footer_Navigate_Btn title="Отзывы"/>
                    </div>
                    <label className={classes.citate_footer_style}>“Цветы лучше пуль”</label>
                    <label className={classes.citate_autor_style}>Эллисон Краузе</label>
                </div>
                <div className={classes.line2_style}></div>
                <div className={classes.line3_style}>
                    <label className={classes.back_txt_style}>Flowers & You  ©  2022</label>
                    <div className={classes.documentation_buttons_style}>
                        <Footer_Info_Btn title="Правовая информация"/>
                        <Footer_Info_Btn title="ИНН"/>
                        <Footer_Info_Btn title="Ещё одна бумажка"/>
                    </div>
                    <label className={classes.mail_footer_style}>feedback@flowers_&_you.com</label>
                </div>
             </div>
        </footer>
    )
}

export default Footer;