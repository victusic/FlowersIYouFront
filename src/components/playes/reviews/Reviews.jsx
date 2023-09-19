import React from 'react';
import classes from './Reviews.module.css';
import '../../styles/App.css';
import CloseBtn from './CloseBtn';

import ClassicInput from './ClassicInput';


const Reviews = () => {
    return(
        <div className={classes.playa_reviews_style}>
            <div className={classes.plate}>
                <div className={classes.UI_kit_buttons}>
                    <div className={classes.buttons_title_plate}>Buttons</div>
                    <div className={classes.buttons_plate}>
                        <button className={classes.kit_button + ' yellow_button'}>Static</button>
                        <button className={classes.kit_button + ' yellow_button'} disabled>Disabled</button>
                        <button className={classes.kit_button + ' yellow_button'} disabled>Loading...</button>
                    </div>
                    <div className={classes.buttons_plate}>
                        <button className={classes.kit_button + ' purple_button'}>Static</button>
                        <button className={classes.kit_button + ' purple_button'} disabled>Disabled</button>
                        <button className={classes.kit_button + ' purple_button'} disabled>Loading...</button>
                    </div>
                    <div className={classes.buttons_plate}>
                        <button className={classes.kit_button + ' gray_button'}>Static</button>
                        <button className={classes.kit_button + ' gray_button'} disabled>Disabled</button>
                        <button className={classes.kit_button + ' gray_button'} disabled>Loading...</button>
                    </div>
                    <div className={classes.buttons_plate}>
                        <button className={classes.link_kit_button + ' nav_light_button'}>Static</button>
                        <button className={classes.link_kit_button + ' nav_light_button'} disabled>Loading...</button>
                    </div>
                </div>
                <div className={classes.UI_kit_inputs}>
                    <div className={classes.buttons_title_plate}>Inputs</div>
                    <ClassicInput title="Static" static=""/>
                    <ClassicInput title="Disabled" static="true"/>
                    <ClassicInput title="Loading..." static="true"/>
                    <ClassicInput title="Error" color="var(--mediumdarkpurple)" static=""/>
                </div>
                <div className={classes.UI_kit_dop}>
                    <div className={classes.buttons_title_plate}>Another</div>
                    <div class={classes.check_base_style}>
                        <label className={classes.check + ' ' + classes.option}>
                            <input type="checkbox" className={classes.check_input} checked />
                            <span className={classes.check_box}>Active</span>
                        </label>
                        <label className={classes.check + ' ' + classes.option}>
                            <input type="checkbox" className={classes.check_input}/>
                            <span className={classes.check_box}>Static</span>
                        </label>
                        <br/>
                        <label className={classes.check + ' ' + classes.option}>
                            <input type="checkbox" className={classes.check_input} disabled />
                            <span className={classes.check_box}>Disabled</span>
                        </label>
                        <label className={classes.check + ' ' + classes.option}>
                            <input type="checkbox"  className={classes.check_input} checked disabled />
                            <span className={classes.check_box}>Disabled +</span>
                        </label>
                    </div>
                    <CloseBtn/>
                </div>
            </div>
        </div>
    )
}

export default Reviews;