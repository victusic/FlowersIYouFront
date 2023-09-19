import React from 'react';
import cl from './CloseBtn.module.css';


const CloseBtn = () => {
    return(
        <div className={cl.levitate}>
            <div className={cl.close_body_button}>
                <div>
                    <div class={cl.leftright}></div>
                    <div class={cl.rightleft}></div>
                </div>
            </div>
        </div>
    )
}

export default CloseBtn;