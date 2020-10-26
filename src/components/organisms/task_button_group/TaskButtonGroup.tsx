import ActionButton from '@molecules/action_button';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { PRIMARY_COLOR } from '@styles/theme';
import useCall from '@hooks/useCall';
import useAddressModal from '@hooks/useAddressModal';
import useScrollToComments from '@hooks/useScrollToComments';
import useServicesScreen from '@hooks/useServicesScreen';
import styles from './styles';

function TaskButtonGroup(): ReactElement {
    const call = useCall();
    const { openAddress } = useAddressModal();
    const { scrollIntoComments } = useScrollToComments();
    const navigateToServices = useServicesScreen();

    return (
        <View style={styles.container}>
            <ActionButton
                onTouch={() => call()}
                label={'Ligar'}
                Icon={<FontAwesome name="phone" size={32} color={PRIMARY_COLOR} />}
            />
            <ActionButton
                onTouch={() => navigateToServices()}
                label={'Serviços'}
                Icon={<FontAwesome name="diamond" size={32} color={PRIMARY_COLOR} />}
            />
            <ActionButton
                onTouch={() => openAddress()}
                label={'Endereços'}
                Icon={<FontAwesome name="map-marker" size={32} color={PRIMARY_COLOR} />}
            />
            <ActionButton
                onTouch={() => scrollIntoComments()}
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
