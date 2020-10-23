import useTaskList from '@hooks/useTasks';
import { context } from '@stores/common';
import React, { ReactElement, useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
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
                    <View>
                        <TouchableOpacity onPress={() => openTask(task)}>
                            <Text>{task.titulo}</Text>
                            <Text>{task.id}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </>
    );
}

export default Initial;
