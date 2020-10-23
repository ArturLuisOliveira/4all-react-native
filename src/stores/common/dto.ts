import Task from '@models/task';

interface Dispatch {
    type: string;
    payload: Payload;
}

export type Payload = Task | null | Task[];

export interface CommonStoreDTO {
    taskList: Task[];
    task: Task | null;
    dispatch?({ type, payload }: Dispatch): void;
}
