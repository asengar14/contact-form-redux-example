/**
 * Importing Actions 
 */
import * as ActionType from '../Actions/actions'

/**
 * initialize state
 */
const initialState = {
    contactInfos :[]
}

/**
 * Defining reducer for Actions to set store's state.
 */
 const reducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.ADD_CONTACT:
            let updatedContactInfos = [...state.contactInfos];
            updatedContactInfos.push(action.payload);
            return {
                ...state,
                contactInfos : updatedContactInfos
            }   
    }
    return state;
}

export default reducer;