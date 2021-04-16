/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, Card, CircularProgress } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { Position, Stack, StackItem } from "components/stack";
import { Task } from "@tasks/protos";

export const HomeScreen: FC = (_) => {
	let [tasks_loaded, update_tasks_loaded] = useState(false);
	let [tasks, update_tasks] = useState<string[]>([]);

	useEffect(() => {
		setTimeout(() => {
			update_tasks(["Task1", "Task2"]);
			update_tasks_loaded(true);
		}, 1000);
	}, []);

	return (
		<div css={css`position:relative; height: 100vh; background-color:whitesmoke;`}>
			{
				tasks_loaded
				? <Stack css={css`height:100%; margin: 8px;`}>
					<StackItem width="100%">
						<div>
							{tasks.map((task) => (
								<Card key={task}>
									<div css={css`padding: 8px;`} >
										{task}
									</div>
								</Card>
							))}
						</div>
					</StackItem>
					<StackItem position={new Position("right","bottom")}>
						<Button>
							Add
						</Button>
					</StackItem>
				</Stack>
				: <div css={css`width:100%; height:100vh;`}>
					<CircularProgress css={css`position: absolute ;left:50%; top:50%;`}/>
				</div>
			}
		</div>
	);
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
