export const LOGIN = 'LOGIN';

export const login = (identity, roomName, token) => {
    return { type: LOGIN, identity, roomName, token }
}