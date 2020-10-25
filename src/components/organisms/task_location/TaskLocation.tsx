import TaskMap from '@molecules/task_map';
import TaskStreet from '@molecules/task_street';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styles from './styles';

function TaskLocation(): ReactElement {
    return (
        <View style={styles.container}>
            <TaskMap />
            <TaskStreet />
        </View>
    );
}

export default TaskLocation;
