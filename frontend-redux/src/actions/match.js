export function addMatch(dev){
    return {
        type: 'ADD_MATCH',
        dev
    };
}

export function removeMatch(dev){
    return {
        type: 'REMOVE_MATCH',
        dev
    };
}