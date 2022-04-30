import React from "react";
import { TextInput, TextZone, Dropdown, But, TaskType, TaskStatus, TaskRank } from "../../components"


export const TaskPage = () => {

    // if (edit) return edit page
    // if (add) return add page

    return(
        <>
            <Dropdown name="JS-Libraries">
                <div>React</div>
                <div>Vue</div>
                <div>Angular</div>
            </Dropdown>
        </>

    )
}