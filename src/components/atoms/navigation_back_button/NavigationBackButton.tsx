import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

function NavigationBackButton(): ReactElement {
    return (
        <View style={styles.container}>
            <AntDesign name="caretleft" size={20} color="white" />
        </View>
    );
}

export default NavigationBackButton;
