import { StatusBar } from 'expo-status-bar';
import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

import '@expo/match-media';

import Provider from '@stores/Provider';
import Initial from '@screens/initial/Initial';
import Main from '@screens/main/Main';

export default function App(): ReactElement {
    return (
        <View style={styles.container}>
            <Provider>
                <Initial />
                <Main />
            </Provider>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
