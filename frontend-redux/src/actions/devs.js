export function addDevsList(devs){
    return {
        type: 'DEVS_LIST',
        devs
    };
}

 export function removeDevsList(id){
    return {
        type: 'REMOVE_DEV',
        id
    };
}