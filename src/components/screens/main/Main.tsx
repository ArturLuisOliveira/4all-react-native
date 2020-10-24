import TaskButtonGroup from '@organisms/task_button_group';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styles from './styles';

function Main(): ReactElement {
    return (
        <View style={styles.container}>
            <TaskButtonGroup />
        </View>
    );
}

export default Main;
