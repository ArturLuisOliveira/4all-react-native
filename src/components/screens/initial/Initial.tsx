import Divider from '@atoms/divider';
import useTaskList from '@hooks/useTasks';
import { context } from '@stores/common';
import React, { ReactElement, useContext } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

function Initial(): ReactElement {
    const { taskList } = useContext(context);
    const { openTask } = useTaskList();
    return (
        <>
            <FlatList
                style={styles.container}
                data={taskList}
                renderItem={({ item: task }) => (
                    <>
                        <TouchableOpacity onPress={() => openTask(task)}>
                            <View style={styles.element}>
                                <View style={styles.avatarContainer}>
                                    <Image source={{ uri: task.urlLogo }} style={styles.avatar} />
                                </View>
                                <Text style={styles.text}>{task.titulo}</Text>
                            </View>
                        </TouchableOpacity>
                        <Divider />
                    </>
                )}
            />
        </>
    );
}

export default Initial;
