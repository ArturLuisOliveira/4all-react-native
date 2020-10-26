import Task from '@models/task';

interface Dispatch {
    type: string;
    payload: Payload;
}

export type Payload = Task | null | Task[] | boolean;

export interface CommonStoreDTO {
    taskList: Task[];
    task: Task | null;
    isAddressModalOpen: boolean;
    dispatch?({ type, payload }: Dispatch): void;
}
