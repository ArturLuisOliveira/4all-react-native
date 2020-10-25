import React, { ReactElement, useContext } from 'react';
import { View, Text } from 'react-native';
import { context } from '@stores/common';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

function TaskStreet(): ReactElement {
    const { task } = useContext(context);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{task?.endereco}</Text>
            <View style={styles.iconContainer}>
                <FontAwesome name="map-marker" size={20} color="orange" />
            </View>
        </View>
    );
}

export default TaskStreet;
