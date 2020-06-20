import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navi from './navigation/navigator.tsx';
import { createStore, combineReducers } from 'redux';
import JoinChatReducer from './store/reducers/joinChat';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    chat: JoinChatReducer
});

const store = createStore(rootReducer);

async function fetchFonts() {
    await Font.loadAsync({
        'tattoo': require('./assets/fonts/tattoo.ttf')
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if(!fontLoaded) {
       return <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={err => console.log(err)}
              />
    }

    return (
        <Provider store={store}>
            <Navi/>
        </Provider>
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
