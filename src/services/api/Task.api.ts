import Task from '@models/task';
import mockTask from './mocks/task.mock';

/**
 * @todo implement the api call with axios, current request to https://dev.4all.com:3003 not working.
 */

class TaskApi {
    static async list(): Promise<Task[]> {
        /**
         * The api will send an { lista: [...ids] } object. So the app should fetch the given tasks.
         */
        const tasks: Task[] = Array(10)
            .fill(null)
            .map(() => mockTask());
        return tasks;
    }

    static async find(id: string): Promise<Task> {
        const task: Task = mockTask({ id });
        return task;
    }
}
export default TaskApi;
