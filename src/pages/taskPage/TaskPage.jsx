import React from "react";
import { DropdownChb, Checkbox, Dropdown } from "../../components"


export const TaskPage = () => {

    // if (edit) return edit page
    // if (add) return add page

    return(
        <>
            <Dropdown name="JS libraries">
                <div>React</div>
                <div>Vue</div>
                <div>Angular</div>
            </Dropdown>
            <DropdownChb name="React parts">
                <Checkbox text="DOM" />
                <Checkbox text="Hooks" />
                <Checkbox text="Router" />
            </DropdownChb>
        </>

    )
}