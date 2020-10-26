import React, { MutableRefObject, ReactElement, useContext, useRef } from 'react';
import { View } from 'react-native';

import { context } from '@stores/common';
import CommentElement from '@molecules/comment_element';
import Comment from '@models/comment';
import useScrollToComments from '@hooks/useScrollToComments';
import styles from './styles';

function CommentList(): ReactElement {
    const { task } = useContext(context);
    const { setCommentsY } = useScrollToComments();
    const commentListRef: MutableRefObject<View | null> = useRef(null);

    return (
        <View
            style={styles.container}
            ref={(ref) => (commentListRef.current = ref)}
            onLayout={({ nativeEvent }) => {
                commentListRef?.current?.measure(() => {
                    setCommentsY(nativeEvent.layout.y);
                });
            }}
        >
            {task?.comentarios.map((comment: Comment, index) => (
                <CommentElement key={`commment-el-${index}`} comment={comment} />
            ))}
        </View>
    );
}

export default CommentList;
