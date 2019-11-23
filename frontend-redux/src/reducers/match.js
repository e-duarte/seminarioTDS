const STATE_INITIAL = null;
export default function match(state = STATE_INITIAL, action){
    switch(action.type){
        case 'ADD_MATCH':
            return action.dev;
        case 'REMOVE_MATCH':
                return action.dev;
        default:
            return state;
    }
}