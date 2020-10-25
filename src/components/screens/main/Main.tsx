import CommentHeader from '@organisms/comment_header';
import CommentList from '@organisms/comment_list';
import TaskButtonGroup from '@organisms/task_button_group';
import React, { ReactElement } from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';

function Main(): ReactElement {
    return (
        <ScrollView style={styles.container}>
            <CommentHeader />
            <TaskButtonGroup />
            <CommentList />
        </ScrollView>
    );
}

export default Main;
