import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ADD_CONTACT } from "../Actions/actions";

/**
 * Contact form Component to add new Contacts
 */
class ContactForm extends Component {
    constructor(props){
        super(props);

        // defining state for contact form.
        this.state = {
            contactName : '',
            salutationsDropdownValue : 'Mr.',
            Notes : '',
            isMarried: true,
            payload : {}
        }
    }

/**
 * toggleChange handles check state of Sync contact on Cloud checkbox
 */
    toggleChange = () => {
        this.setState({
            isMarried: !this.state.isMarried,
        });
      }
   
    /**
    * onChangeHandler sets state for Name and Additional Notes input field.
    */
    onChangeHandler = async (event) => {
        debugger;
       await this.setState({[event.target.name] : event.target.value});
    }

   /**
    * onHandleDropdownChange sets state for salutation dropdown.
    */ 
    onHandleDropdownChange = (event) =>
    this.setState({salutationsDropdownValue: event.target.value});

    /**
    * onFormSubmit creates the final payload on submission 
    * of form which needs to save into redux store and save it 
    * by calling saveContactDetails function from Component's props.
    */
    onFormSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            salutationsDropdownValue : this.state.salutationsDropdownValue,
            contactName : this.state.contactName,
            Notes : this.state.Notes,
            isMarried : this.state.isMarried
        }

        await this.setState({payload : payload});
        this.props.saveContactDetails(this.state.payload);
        await this.setState({  contactName : '',
        salutationsDropdownValue : 'Mr.',
        Notes : '',
        isMarried: true,
        payload : {}});
    }

    render(){
        return (
            <Fragment>
                <h3>New Contact Form</h3>
                <form onSubmit = {this.onFormSubmit} className = "card p-5">
                    <select className = "form-control mb-1" value={this.state.value} onChange={this.onHandleDropdownChange}>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                </select>
                    <input className = "form-control  mb-1" name="contactName" placeholder = "Name" type = "text" value = {this.state.contactName} onChange = {this.onChangeHandler} required />
                    <textarea  className = "form-control  mb-1" rows="4" name = "Notes" cols="50" placeholder = "Additional Notes" value = {this.state.Notes} onChange = {this.onChangeHandler} required></textarea>
                    <label>
                        <input type="checkbox"
                        checked={this.state.isMarried}
                        onChange={this.toggleChange}/>
                        Is Married?
                    </label>
                    <button className = "btn btn-primary" type = "submit">Submit</button>
                </form>
            </Fragment>
        )
    }
}

/*
* mapping Actions with Contact Form Component's props 
*/
const mapActionToProps = (dispatch) => {
    return {
        saveContactDetails : (payload) => {
                console.log("PROPS",payload)
            dispatch({type: ADD_CONTACT, payload : payload })}
    }
}

/*
* connecting actions with Component's props by using 
* connect method from react-redux;
*/
export default connect(null,mapActionToProps)(ContactForm);