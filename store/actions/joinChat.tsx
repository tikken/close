export const JOIN_CHAT = 'JOIN_CHAT';

export const joinChat = (identity, roomName) => {
    return { type: JOIN_CHAT, identity, roomName }
}