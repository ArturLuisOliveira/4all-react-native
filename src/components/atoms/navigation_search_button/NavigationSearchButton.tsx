import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

function NavigationSearchButton(): ReactElement {
    return (
        <View style={styles.container}>
            <FontAwesome name="search" size={25} color="white" />
        </View>
    );
}

export default NavigationSearchButton;
