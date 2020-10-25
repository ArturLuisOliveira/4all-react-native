import TaskMap from '@molecules/task_map';
import TaskStreet from '@molecules/task_street';
import React, { ReactElement } from 'react';
import { View } from 'react-native';

function TaskLocation(): ReactElement {
    return (
        <View>
            <TaskMap />
            <TaskStreet />
        </View>
    );
}

export default TaskLocation;
