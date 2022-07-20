

import React, { Fragment } from 'react';
import './../style/components/Header.scss';

export function Header({ title, showAsList, handleLayoutChange }) {
    const checkBoolean = showAsList;
    const handleClickInput = () => {
        handleLayoutChange();
    };
    return (
        <Fragment>
            <div className="header__wrapper">
                <h1>
                    {title}
                </h1>
                <div>
                    <input type="checkbox" checked={showAsList} onChange={handleClickInput} />
                    {showAsList ? 'Show as list' : 'Show as awesome grid'}
                </div>
            </div>
        </Fragment>
    )
}
