import TaskApi from '@api/Task.api';
import { useNavigation } from '@react-navigation/native';
import { context, actions } from '@stores/common';
import { useContext, useEffect } from 'react';

import * as screens from '@constants/screens';
import Task from '@models/task';

interface UseTasksDTO {
    openTask(task: Task): void;
}

const useTasks = (): UseTasksDTO => {
    const { dispatch } = useContext(context);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const tasks = await TaskApi.list();
            if (dispatch) dispatch({ type: actions.SET_TASK_LIST, payload: tasks });
        })();
    }, []);

    const openTask = (task: Task) => {
        if (dispatch) dispatch({ type: actions.SET_TASK, payload: task });
        navigation.navigate(screens.MAIN);
    };

    return { openTask };
};

export default useTasks;
