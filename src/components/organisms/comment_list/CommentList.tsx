import React, { ReactElement, useContext } from 'react';
import { View } from 'react-native';

import { context } from '@stores/common';
import CommentElement from '@molecules/comment_element';
import Comment from '@models/comment';
import styles from './styles';

function CommentList(): ReactElement {
    const { task } = useContext(context);

    return (
        <View style={styles.container}>
            {task?.comentarios.map((comment: Comment, index) => (
                <CommentElement key={`commment-el-${index}`} comment={comment} />
            ))}
        </View>
    );
}

export default CommentList;
