import React, { ReactElement } from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';

interface ActionButtonProps {
    label: string;
    Icon: ReactElement;
    onTouch(): void;
}

function ActionButton({ label, Icon, onTouch }: ActionButtonProps): ReactElement {
    return (
        <Pressable style={styles.container} onPress={onTouch}>
            {Icon}
            <Text numberOfLines={1} style={styles.text}>
                {label}
            </Text>
        </Pressable>
    );
}

export default ActionButton;
