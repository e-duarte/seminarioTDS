const STATE_INITIAL = {};

export default function user(state = STATE_INITIAL, action){
    switch(action.type){
        case 'LOGIN_USER':
            return action.user;
        case 'LOGOUT_USER':
            return action.user;
        default:
            return state;
    }
}
