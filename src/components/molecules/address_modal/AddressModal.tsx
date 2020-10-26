import React, { ReactElement, useContext } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { context } from '@stores/common';
import useAddressModal from '@hooks/useAddressModal';
import styles from './styles';
import { PRIMARY_COLOR } from '@styles/theme';

function AddressModal(): ReactElement {
    const { isAddressModalOpen, task } = useContext(context);
    const { closeAddress } = useAddressModal();

    return (
        <Modal animationType="slide" transparent={true} visible={isAddressModalOpen}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.addressContainer}>
                        <FontAwesome name="map-marker" size={50} color={PRIMARY_COLOR} />
                        <Text style={styles.text}>{task?.endereco}</Text>
                    </View>
                    <Button color={PRIMARY_COLOR} title="Retornar" onPress={() => closeAddress()} />
                </View>
            </View>
        </Modal>
    );
}

export default AddressModal;
