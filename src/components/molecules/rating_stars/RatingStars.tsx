import React, { ReactElement, useMemo } from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

interface RatingStarsProps {
    note: number;
}

function RatingStars({ note = 0 }: RatingStarsProps): ReactElement {
    const stars = useMemo(() => ({ marked: note, unmarked: 5 - note }), [note]);

    return (
        <View style={styles.container}>
            {Array(stars.marked)
                .fill(null)
                .map(() => (
                    <FontAwesome name="star" size={20} color="orange" />
                ))}
            {Array(stars.unmarked)
                .fill(null)
                .map(() => (
                    <FontAwesome name="star" size={20} color="grey" />
                ))}
        </View>
    );
}

export default RatingStars;
