import React, { ReactElement, useContext } from 'react';
import { Image, View, Text } from 'react-native';
import { context } from '@stores/common';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

function CommentHeader(): ReactElement {
    const { task } = useContext(context);

    return (
        <View>
            <Image
                source={{
                    uri: task?.urlFoto
                }}
                style={styles.image}
            />
            <View style={styles.sectionContainer}>
                <Text style={styles.title}>{task?.titulo}</Text>
                <View style={styles.iconContainer}>
                    <FontAwesome name="star" size={40} color="orange" />
                </View>
            </View>
        </View>
    );
}

export default CommentHeader;
