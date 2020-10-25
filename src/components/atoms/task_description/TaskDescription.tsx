import React, { ReactElement, useContext } from 'react';
import { Text } from 'react-native';

import { context } from '@stores/common';
import styles from './styles';

function TaskDescription(): ReactElement {
    const { task } = useContext(context);
    return <Text style={styles.text}>{task?.texto}</Text>;
}

export default TaskDescription;
