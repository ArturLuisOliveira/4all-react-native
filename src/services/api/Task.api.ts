import Task from '@models/task';
import mockTask from './mocks/task.mock';

/**
 * @todo implement the api call with axios, current request to https://dev.4all.com:3003 not working.
 */

class TaskApi {
    static list(): Task[] {
        const tasks: Task[] = Array(10)
            .fill(null)
            .map(() => mockTask());
        return tasks;
    }

    static find(id: string): Task {
        const task: Task = mockTask({ id });
        return task;
    }
}
export default TaskApi;
