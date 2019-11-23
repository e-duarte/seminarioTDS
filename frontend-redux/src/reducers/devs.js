const STATE_INITIAL = [];

export default function devs(state = STATE_INITIAL, action){
    switch(action.type){
        case 'DEVS_LIST':
            return [...action.devs];
        case 'REMOVE_DEV':
            return state.filter( dev => dev._id !== action.id);
        default:
            return state;
    }
}