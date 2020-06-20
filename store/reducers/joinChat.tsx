import { JOIN_CHAT } from '../actions/joinChat';

const initialState = {
    identity: false,
    roomName: false
}

const JoinChatReducer = (state = initialState, action) => {
    switch(action.type) {
        case JOIN_CHAT: 
            return { ...state, identity: action.identity, roomName: action.roomName }
        default:
            return state;
    }
}

export default JoinChatReducer;