import Task from '@models/task';
import { MutableRefObject } from 'react';
import { ScrollView } from 'react-native';
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
        case actions.SET_IS_ADDRESS_MODAL_OPEN:
            return { ...state, isAddressModalOpen: action.payload as boolean };
        case actions.SET_SCROLL_REF:
            return { ...state, scrollRef: action.payload as MutableRefObject<ScrollView> };
        case actions.SET_COMMENTS_Y_POSITION:
            return { ...state, commentsYPosition: action.payload as number };
        default:
            return state;
    }
};

export default reducer;
