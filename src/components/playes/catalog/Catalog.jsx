import React from 'react';
import classes from './Catalog.module.css';
import Navigate_Catalog_Line from './elements/navigateline/NavigateCatalogLine';

const Catalog = () => {
    return(
        <div className={classes.playa_catalog_style}>
            <div className={classes.plate}>
                <Navigate_Catalog_Line></Navigate_Catalog_Line>
            </div>
        </div>
    )
}

export default Catalog;