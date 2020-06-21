import { LOGIN } from '../actions/login';

const initialState = {
    identity: false,
    roomName: false,
    token: false
}

const JoinChatReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                identity: action.identity,
                roomName: action.roomName,
                token: action.token
            }

        default:
            return state;
    }
}




export default JoinChatReducer;