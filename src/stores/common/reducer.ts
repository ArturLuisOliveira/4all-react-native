import Task from '@models/task';
import * as actions from './actions';
import { CommonStoreDTO, Payload } from './dto';

interface ActionDTO {
    payload: Payload;
    type: string;
}

const reducer = (state: CommonStoreDTO, action: ActionDTO): CommonStoreDTO => {
    switch (action.type) {
        case actions.SET_TASK_LIST:
            return { ...state, taskList: action.payload as Task[] };
        case actions.SET_TASK:
            return { ...state, task: action.payload as Task };
        default:
            return state;
    }
};

export default reducer;
