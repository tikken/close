import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VideoDisplay from '../components/display-video';

export default function Room() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome chat</Text>
            <VideoDisplay roomId="1" />
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
        fontSize: 36
    }
});
