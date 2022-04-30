import React from "react";
import { Dropdown, Checkbox } from "../../components"


export const TaskPage = () => {

    // if (edit) return edit page
    // if (add) return add page

    return(
        <>
            <Dropdown name="JS-Libraries">
                <Checkbox text="React"></Checkbox>
                <Checkbox text="Vue"></Checkbox>
                <Checkbox text="Angular"></Checkbox>
            </Dropdown>
        </>

    )
}