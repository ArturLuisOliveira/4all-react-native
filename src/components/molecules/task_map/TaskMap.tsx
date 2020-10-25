import React, { ReactElement, useContext, useMemo } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import { context } from '@stores/common';
import styles from './styles';

function TaskMap(): ReactElement {
    const { task } = useContext(context);

    const { latitude, latitudeDelta, longitude, longitudeDelta } = useMemo(
        () => ({
            latitude: Number(task?.latitude),
            longitude: Number(task?.longitude),
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        }),
        [task]
    );

    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta,
                    longitudeDelta
                }}
            />
        </View>
    );
}

export default TaskMap;
