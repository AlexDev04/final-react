import React from "react";
import { TaskType, TaskStatus, TaskRank, More } from "../";
import "./TaskListItem.sass";


export const TaskListItem = ({type, taskName, userName, status, rank, more}) => {
    return(
        <article className="taskListItem">
                <div className="taskListItem-type">
                    <TaskType type={type} />
                </div>
                <div className="taskListItem-name">
                    <p>{taskName}</p>
                </div>
                {userName && 
                    <div className="taskListItem-username">
                        <p>{userName}</p>
                    </div>
                }
                <div className="taskListItem-status">
                    <TaskStatus status={status} />
                </div>
                <div className="taskListItem-rank">
                    <TaskRank rank={rank} />
                </div>
                {more &&
                    <More className="taskListItem-burger" />
                }
            </article>
    )
}