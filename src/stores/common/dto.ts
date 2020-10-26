import Task from '@models/task';
import { MutableRefObject } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

interface Dispatch {
    type: string;
    payload: Payload;
}

export type Payload = Task | null | Task[] | boolean | MutableRefObject<ScrollView> | number;

export interface CommonStoreDTO {
    taskList: Task[];
    task: Task | null;
    isAddressModalOpen: boolean;
    scrollRef: MutableRefObject<ScrollView> | null;
    commentsYPosition: number;
    dispatch?({ type, payload }: Dispatch): void;
}
