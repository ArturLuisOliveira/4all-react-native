import React, { ReactElement, useMemo } from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import { PRIMARY_COLOR } from '@styles/theme';

interface RatingStarsProps {
    note: number;
}

function RatingStars({ note = 0 }: RatingStarsProps): ReactElement {
    const stars = useMemo(() => ({ marked: note, unmarked: 5 - note }), [note]);

    return (
        <View style={styles.container}>
            {Array(stars.marked)
                .fill(null)
                .map((value, index) => (
                    <FontAwesome key={`marked-star-${index}`} name="star" size={20} color={PRIMARY_COLOR} />
                ))}
            {Array(stars.unmarked)
                .fill(null)
                .map((value, index) => (
                    <FontAwesome key={`unmarked-star-${index}`} name="star" size={20} color="grey" />
                ))}
        </View>
    );
}

export default RatingStars;
