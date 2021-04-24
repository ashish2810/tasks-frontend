import { css } from "@emotion/react";
import { Button, Card, Checkbox, CircularProgress, Typography } from "@material-ui/core";
import { task } from "@tasks/protos";
import { FC, useContext, useEffect, useState } from "react";
import { Position, Stack, StackItem } from "./stack";
import { TasksContext } from "contexts";

export const AllTaks : FC<{className?: string}> = (props) => {
	let [tasks_loaded, update_tasks_loaded] = useState(false);
	let tasksContext = useContext(TasksContext);

  useEffect(() => {
    setTimeout(() => {
      let task1: task.Task = new task.Task({
        name: "Task1",
        description: "task desc",
        subtasks: ["subtask1", "subtask2"],
        id: "hqwpijmcpwoq",
        tags: ["Rust", "JS"]
      });
      tasksContext.update_tasks([task1]);
      update_tasks_loaded(true);
    }, 100);
  }, []);

  return (
    <div className={props.className} css={css`position: relative; height: 100%; padding:8px; box-sizing: border-box;`} >
      {tasks_loaded ? 
        <Stack css={css`height: 100%;`} >
          <StackItem width="100%">
            <div>
              {tasksContext.tasks.map((tsk) => (
                <Card key={tsk.name}>
                  <div css={css`padding: 8px;`}>
                    <Typography variant={"h6"}>{tsk.name}</Typography>
                    <div css={css`padding-left: 8px;`}>
                        {tsk.subtasks.map((subtask,i) => 
                          <div key={i}>
                            <Checkbox/>
                            <Typography variant="body1" css={css`display: inline;`}>{subtask}</Typography>
                          </div>
                        )}
                    </div>
                  </div>  
                </Card>
              ))}
            </div>
          </StackItem>
          <StackItem position={new Position("right", "bottom")}>
          <Button onClick = {() => tasksContext.set_opened_task(0)}>Add</Button>
          </StackItem>
        </Stack>
       : <div css={css`width: 100%; height: 100vh;`}>
          <CircularProgress css={css`position: absolute; left: 50%; top: 50%;`}/>
        </div>
      }
    </div>
  );
}