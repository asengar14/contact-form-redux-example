import React from "react";

/**
 * ListItem component for each individual list Items.
 */
const ListItem = (props) => {
    return (
        <li className = "card mb-1">
            <div className = " d-flex justify-content-start pl-2">
                 Name : {props.listItem.salutationsDropdownValue} {props.listItem.contactName}
            </div>
            <div className = " d-flex justify-content-start pl-2">
                 Additional Notes : {props.listItem.Notes}
            </div>
            
            <div className = " d-flex justify-content-start pl-2">
                 Is Married: {props.listItem.isMarried ? "Yes" : "No"}
            </div>
        </li>
    )
}

export default ListItem;