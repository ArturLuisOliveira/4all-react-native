import React, { MutableRefObject, ReactElement, useEffect, useRef } from 'react';
import TaskHeader from '@organisms/task_header';
import CommentList from '@organisms/comment_list';
import TaskInfo from '@organisms/task_info';
import { ScrollView } from 'react-native';
import styles from './styles';
import TaskLocation from '@organisms/task_location';
import AddressModal from '@molecules/address_modal';
import useScrollToComments from '@hooks/useScrollToComments';

function Main(): ReactElement {
    const { setScrollRef } = useScrollToComments();

    //eslint-disable-next-line
    const scrollRef: MutableRefObject<ScrollView | null> = useRef(null);

    useEffect(() => {
        if (scrollRef && scrollRef.current) {
            setScrollRef(scrollRef);
        }
    }, [scrollRef]);

    return (
        <ScrollView
            ref={(scroller) => {
                scrollRef.current = scroller;
            }}
            style={styles.container}
        >
            <TaskHeader />
            <TaskInfo />
            <TaskLocation />
            <CommentList />
            <AddressModal />
        </ScrollView>
    );
}

export default Main;
