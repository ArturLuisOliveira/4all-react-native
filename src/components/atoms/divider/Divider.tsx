import React, { ReactElement } from 'react';
import { View } from 'react-native';

import styles from './styles';

function Divider(): ReactElement {
    return <View style={styles.divider} />;
}

export default Divider;
