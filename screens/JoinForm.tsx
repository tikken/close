import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import colors from '../constants/colors';
import { login } from '../store/actions/login';
import axios from 'axios';

const JoinForm = props => {
    const storeState = useSelector(state => state.chat);
    const [identity, setIdentity] = useState('');
    const [roomName, setRoomName] = useState('');

    const dispatch = useDispatch();

    const joinChatHandler = () => {
        const TWILIO_TOKEN_URL = 'https://periwinkle-collie-4881.twil.io/create-room-token';
        async function GetRoomToken(identity, roomName) {
            let result = await axios.post(TWILIO_TOKEN_URL, {
                identity,
                roomName
            });
            
            return result.data
        };
        
        GetRoomToken(identity, roomName).then((token) => {
            dispatch(login(identity, roomName, token));
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Hello stranger</Text>

            <TextInput
                placeholder = "Room name"
                style={styles.textInput}
                onChangeText={text => setRoomName(text)}
                value={roomName}
            />

            <TextInput
                placeholder = "Your name"
                style={styles.textInput}
                onChangeText={text => setIdentity(text)}
                value={identity}
            />

            <Button title={"Join chat"} onPress={joinChatHandler} color={colors.black} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontFamily: 'tattoo',
        fontSize: 24
    },
    textInput: {
        height: 40,
        borderColor: colors.black,
        borderWidth: 1,
        width: 200,
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 10
    }
});

export default JoinForm;