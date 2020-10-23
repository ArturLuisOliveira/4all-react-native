import { StatusBar } from 'expo-status-bar';
import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';

import '@expo/match-media';

import Provider from '@stores/Provider';
import Routes from './src/routes/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App(): ReactElement {
    return (
        <SafeAreaView style={styles.container}>
            <Provider>
                <Routes />
            </Provider>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
