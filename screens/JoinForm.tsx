import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { joinChat } from '../store/actions/joinChat';
import colors from '../constants/colors';

const JoinForm = props => {
    const storeState = useSelector(state => state.chat);
    const [identity, setIdentity] = useState('');
    const [roomName, setRoomName] = useState('');

    const dispatch = useDispatch();
    const joinChatHandler = () => {
       dispatch(joinChat(identity, roomName));
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

            {/*<Button title={"Join chat"} onPress={() => {*/}
                {/*props.navigation.navigate({ routeName: 'Room' });*/}
            {/*}} />*/}

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