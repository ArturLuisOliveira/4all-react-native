import React, { ReactElement } from 'react';
import TaskHeader from '@organisms/task_header';
import CommentList from '@organisms/comment_list';
import TaskInfo from '@organisms/task_info';
import { ScrollView } from 'react-native';
import styles from './styles';
import TaskLocation from '@organisms/task_location';
import AddressModal from '@molecules/address_modal';

function Main(): ReactElement {
    return (
        <ScrollView style={styles.container}>
            <TaskHeader />
            <TaskInfo />
            <TaskLocation />
            <CommentList />
            <AddressModal />
        </ScrollView>
    );
}

export default Main;
