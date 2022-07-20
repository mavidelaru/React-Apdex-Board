import React, { Fragment } from 'react';
import './../style/components/AppItem.scss';
import swal from 'sweetalert';

export function AppItem({ appInfo }) {
    const { apdex, contributors, host, name, version } = appInfo;
    const handleAppClick = () => {
        swal(appInfo.name,
            `
            Release version: ${appInfo.version}
            App Apdex: ${appInfo.apdex}           
            `
        );
    }
    return (
        <Fragment>
            <li key={appInfo.name}>
                <a type='checkbox' onClick={handleAppClick}>
                    <span className='appitem__apdex'>{appInfo.apdex}</span>
                    <span className='appitem__app-name'>{appInfo.name}</span>
                </a>
            </li>
        </Fragment>
    );
}