import React, { Fragment, useState, useEffect } from "react";
//Components
import { HostList } from "./components/HostList";
import { Header } from "./components/Header";
import { HostService } from "./services/HostService";
import "./style/components/App.scss"

const flagGrid = "hostApp.grid";

export function App() {
    const hostService = new HostService();
    const hostsList = hostService.getListOfHostsName();
    const [actualState, setNewState] = useState(
        {
            showAsList: false,
            hosts: []
        }
    );

    useEffect(() => {
        async function loadData() {
            var applicationsList = hostsList.map((host) => {
                return hostService.getAllApplicationsFromHostName(host);
            });
            let newState = actualState;
            newState.hosts = applicationsList;
            setNewState(newState);
            setNewState({
                showAsList: actualState.showAsList,
                hosts: newState.hosts
            });
        }
        loadData();
    }, []);

    const handleLayoutChange = () => {
        let newState = actualState;
        newState.showAsList = !actualState.showAsList
        setNewState({
            showAsList: newState.showAsList,
            hosts: newState.hosts
        })
    };
    const handleHostsChange = () => {
        let newState = actualState;
        setNewState({
            showAsList: newState.showAsList,
            hosts: newState.hosts
        })
    };

    return (
        <Fragment>
            <section>
                <Header title={'Apps by Host'} showAsList={actualState.showAsList} handleLayoutChange={handleLayoutChange} />
            </section>
            <section className={`${(actualState.showAsList) ? 'hostList__wrapper__grid' : ''}`}>
                {(actualState.hosts ?
                    (actualState.hosts.map((host) =>
                        <HostList key={host.name} hostApplications={host} showAsList={actualState.showAsList} handleHostsChange={handleHostsChange} >
                        </HostList>
                    )) :
                    (<p>{'There are no hosts'}</p>)
                )
                }
            </section>
        </Fragment>
    );
};