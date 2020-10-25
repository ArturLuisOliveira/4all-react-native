import Divider from '@atoms/divider';
import TaskDescription from '@atoms/task_description';
import TaskButtonGroup from '@organisms/task_button_group';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styles from './styles';

function TaskInfo(): ReactElement {
    return (
        <View style={styles.container}>
            <TaskButtonGroup />
            <Divider />
            <TaskDescription />
        </View>
    );
}

export default TaskInfo;
