import { task } from "@tasks/protos";
import { createContext } from "react";

export interface TasksContextInterface {
	task_opened : number,
	set_opened_task: (i:number) => void,
	tasks: task.Task[],
	update_tasks: (tasks: task.Task[]) => void
}

export const TasksContext = createContext<TasksContextInterface>({
	task_opened: -2,
  set_opened_task : (_) => {},
	tasks: [],
	update_tasks: (_) => {}
});