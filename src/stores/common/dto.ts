import Task from '@models/task';

interface Dispatch {
    type: string;
    payload: Payload;
}

export interface Payload {
    taskList?: Task[];
    task?: Task | null;
}

export interface CommonStoreDTO {
    taskList: Task[];
    task: Task | null;
    dispatch?({ type, payload }: Dispatch): void;
}
