import { css } from "@emotion/react";
import { AllTaks } from "components/all_tasks";
import { FC, useState } from "react";
import {TasksContext} from "contexts"
import { task } from "@tasks/protos";
import { AddUpdateTask } from "components/add_update_task";

export const HomeScreen: FC = (_) => {
  let [opened_task, update_opened_task] = useState(-2);
  let [tasks, update_tasks] = useState<task.Task[]>([]);

  return <TasksContext.Provider value={{
      task_opened: opened_task,
      set_opened_task: update_opened_task,
      tasks : tasks,
      update_tasks : update_tasks,
    }}>
    <div css={css`display:flex; flex-direction:row; position:relative; height:100vh; background-color: whitesmoke;`}>
      <AllTaks css={css`flex-grow:1;`}/>
      {opened_task > -2 && <AddUpdateTask css={css`flex-basis:30%;`}/>}
    </div>
  </TasksContext.Provider> ;
};

// class InheritedWidget<T>{
// 	Provider : FC<T>;
// 	_context : Context<{val: T, listeners: Dispatch<SetStateAction<T>>[]}>;

// 	constructor(provider: FC<T>, context: Context<{val: T, listeners: Dispatch<SetStateAction<T>>[]}>){
// 		this.Provider = provider;
// 		this._context = context;
// 	}
// }

// function createInheritedWidget<T>(value: T) {
// 	let Context = createContext({ val: value , listeners: []});
// 	const InheritedWidgetProvider: FC<T> = (props, _) => {
// 		return (
// 			<Context.Provider value={{ val: props, listeners: [] }}>
// 				{props.children}
// 			</Context.Provider>
// 		)
// 	};
// 	return new InheritedWidget(InheritedWidgetProvider, Context);
// }

// function notifyListeners<T>(inheritedWidget: InheritedWidget<T>) {
// 	let {val, listeners} = useContext(inheritedWidget._context);

// 	listeners.forEach(listener => {
// 		listener();
// 	});
// }

// function useInheritedWidget<T>(inheritedWidget: InheritedWidget<T>) {
// 	let {val, listeners} = useContext(inheritedWidget._context);
// 	let [state, setState] = useState<T>(val);

// 	useEffect(() => {
// 		listeners.pu
// 		return () => {
// 			listeners.remove();
// 		}
// 	})

// 	return state;
// }
