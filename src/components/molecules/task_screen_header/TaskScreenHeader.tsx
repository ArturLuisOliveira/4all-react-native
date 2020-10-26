import React, { ReactElement, useContext } from 'react';
import { Text, View } from 'react-native';
import { context } from '@stores/common';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

function TaskScreenHeader(): ReactElement {
    const { task } = useContext(context);
    return (
        <View style={styles.container}>
            <FontAwesome style={styles.mapIcon} name="map-marker" size={18} color="white" />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{task?.cidade}</Text>
                <Text style={styles.text}> - </Text>
                <Text style={styles.text}>{task?.bairro}</Text>
            </View>
        </View>
    );
}

export default TaskScreenHeader;
