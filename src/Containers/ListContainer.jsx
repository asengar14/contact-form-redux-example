import React, {Component, Fragment} from "react";

import ListItem from "../Components/ListItem";

/**
 * ListContainer is a parent container for list items.
 */
const ListContainer = (props) => {
    
    return (
        <Fragment>
            <h3>Contact List</h3>
            <ul>
                {props.stateItem.map((item, index) => (
                    <ListItem key = {index} listItem = {item}></ListItem>
                ))}
            </ul>
        </Fragment>
    )
}

export default ListContainer;