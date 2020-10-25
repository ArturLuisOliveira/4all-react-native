import CommentList from '@organisms/comment_list';
import TaskButtonGroup from '@organisms/task_button_group';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styles from './styles';

function Main(): ReactElement {
    return (
        <View style={styles.container}>
            <TaskButtonGroup />
            <CommentList />
        </View>
    );
}

export default Main;
