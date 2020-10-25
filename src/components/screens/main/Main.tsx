import TaskHeader from '@organisms/task_header';
import CommentList from '@organisms/comment_list';
import TaskButtonGroup from '@organisms/task_button_group';
import React, { ReactElement } from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import TaskLocation from '@organisms/task_location';

function Main(): ReactElement {
    return (
        <ScrollView style={styles.container}>
            <TaskHeader />
            <TaskButtonGroup />
            <TaskLocation />
            <CommentList />
        </ScrollView>
    );
}

export default Main;
