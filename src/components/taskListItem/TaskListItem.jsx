import React from "react";
import { useNavigate } from "react-router";
import { TaskType, TaskStatus, TaskRank, More } from "../";
import "./TaskListItem.sass";


export const TaskListItem = ({className, type, taskName, userName, status, rank, id, more}) => {

    const navigate = useNavigate();

    const handleOpen = () => {
        navigate(`/tasks/${id}`)
    }

    return(
        <article className={`taskListItem ${className}`}>
                <div className="taskListItem-type">
                    <TaskType type={type} />
                </div>
                <div className="taskListItem-name"  onClick={handleOpen}>
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
                    <More className="taskListItem-burger" mode={status} id={id} />
                }
            </article>
    )
}