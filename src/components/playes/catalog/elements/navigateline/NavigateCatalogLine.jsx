import React from 'react';
import classes from './NavigateCatalogLine.module.css';
import Category_Btn from './CategoryBtn';

const Navigate_Catalog_Line = () => {
    return(
        <div className={classes.playa}>
            <div className={classes.navigate_line_style}>
                <Category_Btn title="Розы"/>
                <Category_Btn title="Моно букеты"/>
                <Category_Btn title="Смешанные букеты"/>
                <Category_Btn title="Аксессуары"/>
                <Category_Btn title="Услуги"/>
            </div>
        </div>
    )
}

export default Navigate_Catalog_Line;