import Comment from '@models/comment';
import RatingStars from '@molecules/rating_stars';
import React, { ReactElement } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

interface CommentProps {
    comment: Comment;
}

function CommentElement({ comment }: CommentProps): ReactElement {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={{ uri: comment.urlFoto }} style={styles.avatar} />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.header}>
                    <View>
                        <Text style={{ ...styles.text, ...styles.name }}>{comment.nome}</Text>
                        <Text style={styles.text}>{comment.titulo}</Text>
                    </View>
                    <RatingStars note={comment.nota} />
                </View>

                <Text style={styles.text}>{comment.comentario}</Text>
            </View>
        </View>
    );
}

export default CommentElement;
