import { css } from "@emotion/react";
import { TasksContext, TasksContextInterface } from "contexts";
import React, { FC, useContext, useReducer, useState } from "react";
import { task } from "@tasks/protos";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import CheckBox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton, Divider } from "@material-ui/core";
import { CloseRounded, Add } from "@material-ui/icons";
import { List } from "components/List";

function init(tasksContext: TasksContextInterface): task.ITask {
	return tasksContext.task_opened == -1
		? new task.Task()
		: task.Task.create(tasksContext.tasks[tasksContext.task_opened]);
}

function reducer(state: task.ITask, action: {
	type: "name" | "description" | "addsubtask" | "tags" | "removesubtask",
	payload?: string | string[] | number
}): task.ITask {
	if (action.type == "name" && typeof action.payload == "string") {
		return { ...state, name: action.payload }
	}
	else if (action.type == "description" && typeof action.payload == "string") {
		return { ...state, description: action.payload }
	}
	else if (action.type == "addsubtask") {
		return { ...state, subtasks: [...state.subtasks ?? [], ""] }
	}
	else if (action.type == "removesubtask" && typeof action.payload == "number") {
		return { ...state, subtasks: state.subtasks?.filter((_, i) => i != action.payload) }
	}
	else if (action.type == "tags" && Array.isArray(action.payload)) {
		return { ...state, tags: action.payload }
	}
	else {
		throw new Error();
	}
}

export const AddUpdateTask: FC<{ className?: string }> = (props) => {
	let tasksContext = useContext(TasksContext);
	let [task, dispatch] = useReducer(reducer, tasksContext, init);
	let [chips, set_chips] = useState<string[]>(["chip1", "chip2", "chip1", "chip2", "chip1", "chip2", "chip1", "chip2", "chip1", "chip2", "chip1", "chip2", "chip1", "chip2", "chip1", "chip2", "chip1", "chip2",]);

	return <div className={props.className}>
		<Card css={css`height:100%; padding:8px; box-sizing:border-box;`}>
			<TextField margin="normal" variant="outlined" fullWidth required={true} value={task.name} label="Name" onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: "name", payload: event.target.value })} />
			<TextField margin="normal" variant="outlined" fullWidth value={task.description} label="Description" onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: "description", payload: event.target.value })} />
			<div css={css`border-radius: 2px; border:1px solid grey; padding:8px; position:relative;`}>
				<List divider={<Divider />}>
					{[...Array.isArray(task.subtasks) ? task.subtasks.map((subtask, i) =>
						<div css={css`margin-left:8px; display:flex; flex-direction:row; align-items: center;`}>
							<CheckBox />
							<Typography css={css`flex:1;`} variant="body1">{subtask}</Typography>
							<IconButton onClick={() => dispatch({ type: "removesubtask", payload: i })}>
								<CloseRounded />
							</IconButton>
						</div>) : []
						,
					<Button css={css`position:relative; left:100%; transform: translateX(-100%);`} onClick={() => dispatch({ type: "addsubtask" })}>
						<Add /> Add Subtask
					</Button>
					]
					}
				</List>
			</div>
			<Autocomplete multiple freeSolo options={["Rust", "JS", "TS"]} value={task.tags ?? []} onChange={(_, val) => dispatch({ type: "tags", payload: val })} renderInput={(params) => <TextField {...params} margin="normal" variant="outlined" label="Tags" fullWidth />} />
		</Card>
	</div>;
}