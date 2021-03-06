import React, { ReactElement, useContext } from 'react';
import { Image, View, Text } from 'react-native';
import { context } from '@stores/common';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import { PRIMARY_COLOR } from '@styles/theme';

function CommentHeader(): ReactElement {
    const { task } = useContext(context);

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: task?.urlFoto
                }}
                style={styles.image}
            />
            <View style={styles.sectionContainer}>
                <Text numberOfLines={1} style={styles.title}>
                    {task?.titulo}
                </Text>
                <View style={styles.iconContainer}>
                    <FontAwesome name="star" size={40} color={PRIMARY_COLOR} />
                </View>
            </View>
        </View>
    );
}

export default CommentHeader;
