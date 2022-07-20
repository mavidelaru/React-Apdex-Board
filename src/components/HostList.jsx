import React from 'react'
import { AppItem } from './AppItem'
import { HostService } from "./../services/HostService";
import './../style/components/HostList.scss';

const TOP_25 = 25;
const TOP_5 = 5;
export function HostList({ hostApplications, handleHostsChange }) {
    const hostService = new HostService();
    let topFiveApps = hostService.getTopAppsByHost(hostApplications, TOP_5);

    const newHostData = {
        apdex: 100,
        contributors: 'Testing',
        host: 'TestingHost',
        name: "testingName",
        version: 10,
    };

    const addApp = () => {
        const addedAplicationtoHostList = hostService.addApplicationToHost(newHostData, hostApplications);
        handleHostsChange();
        return addedAplicationtoHostList;
    };
    const removeApp = () => {
        const removedAplicationtoHostList = hostService.removeAppFromHost(newHostData, hostApplications);
        handleHostsChange();
        return removedAplicationtoHostList;
    };
    return (
        <div className="hostList__wrapper">
            <h2 key={hostApplications.hostName}>{hostApplications.hostName}</h2>
            {topFiveApps.map((app) => (
                <AppItem key={app.name} appInfo={app}></AppItem>
            ))}
        </div>
    )
}
