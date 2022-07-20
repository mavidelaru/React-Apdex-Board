import data from "../data/host-app-data.json";
const rawData = data;
export class HostService {
    /**
   * getListOfHostsName
   * @description Get the list of Hosts Names
   */
    getListOfHostsName() {
        //Me creo un array de los Hosts que tenemos
        let listOfHosts = [];
        rawData.forEach((aplication) => {
            aplication.host.forEach( (host) => {
                if( !listOfHosts.includes(host)){
                    listOfHosts.push(host);
                }
            } );
        });
        return listOfHosts;
    };
    /**
   * getAllApplicationsFromHostName
   * @description Get the list of all Applications from a HostName
   * @param hostsName: string
   */
    getAllApplicationsFromHostName(hostsName) {
        const listOfHostsAndApps = {
            hostName:hostsName,
            applicationsList: []
        };
       rawData.forEach( (aplication) => { 
            if( aplication.host.includes(hostsName) ) {
                listOfHostsAndApps.applicationsList.push(aplication);
            }
        } );        
        return listOfHostsAndApps;
    };
    /**
   * getTopAppsByHost
   * @description Get the top Applications from a Host name
   * @param hostsName: array
   * @param number: number
   */
    getTopAppsByHost(hostsName , number) {
        number ? number=number : number=25;
        var applications = hostsName.applicationsList;
        applications.sort(this.compare_apdex);
        const slicedApps = applications.reverse().slice(0,number);
        return slicedApps;
    };
     compare_apdex( a, b ) {
        if ( a.apdex < b.apdex){
            return -1;
        }
        if ( a.apdex > b.apdex){
            return 1;
        }
        return 0;
    }
   /**
   * removeAppFromHost
   * @description Remove the passed Aplication data from de Host list.
   * @param newHostData: array
   * @param listHostApplications: array
   */
    removeAppFromHost(newHostData, listHostApplications){
        for( var i = 0; i < listHostApplications.applicationsList.length; i++){ 
            if ( listHostApplications.applicationsList[i].name === newHostData.name) { 
                listHostApplications.applicationsList.splice(i, 1); 
            }
        }
        return listHostApplications;
    };
    /**
   * addApplicationToHost
   * @description Add Application to host list
   * @param newHostData: array
   * @param listHostApplications: array
   */
     addApplicationToHost(newHostData, listHostApplications) {
        for( var i = 0; i < listHostApplications.applicationsList.length; i++){ 
            if ( listHostApplications.applicationsList[i].name === newHostData.name) { 
                return null;
            }
        }
        listHostApplications.applicationsList.push(newHostData);
         return listHostApplications;
     };
}
