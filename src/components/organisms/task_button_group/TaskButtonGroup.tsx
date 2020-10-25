import ActionButton from '@molecules/action_button';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { PRIMARY_COLOR } from '@styles/theme';

function TaskButtonGroup(): ReactElement {
    return (
        <View style={styles.container}>
            <ActionButton
                onTouch={() => console.log('Ligar')}
                label={'Ligar'}
                Icon={<FontAwesome name="phone" size={32} color={PRIMARY_COLOR} />}
            />
            <ActionButton
                onTouch={() => console.log('Serviços')}
                label={'Serviços'}
                Icon={
                    <>
                        <FontAwesome name="diamond" size={32} color={PRIMARY_COLOR} />
                    </>
                }
            />
            <ActionButton
                onTouch={() => console.log('Endereços')}
                label={'Endereços'}
                Icon={<FontAwesome name="map-marker" size={32} color={PRIMARY_COLOR} />}
            />
            <ActionButton
                onTouch={() => console.log('Comentários')}
                label={'Comentários'}
                Icon={<FontAwesome name="comments" size={32} color={PRIMARY_COLOR} />}
            />
            <ActionButton
                onTouch={() => console.log('Favoritos')}
                label={'Favoritos'}
                Icon={<FontAwesome name="star" size={32} color={PRIMARY_COLOR} />}
            />
        </View>
    );
}

export default TaskButtonGroup;
