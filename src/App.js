import React, {Component} from 'react';
import './App.css';
import ContactForm from "./Components/ContactForm";
import ListContainer from "./Containers/ListContainer";
import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
   let ListContainerComponent; 
    if(this.props.contactInfos.length === 0){
       ListContainerComponent = (<h2 className = "font-weight-bold"> No Contact Found</h2>);
      }else {
        ListContainerComponent =  (<ListContainer stateItem = {this.props.contactInfos}></ListContainer>)
     }

  return (
    <div className="App">
      <div class="jumbotron p-3">
        <div class="container">
          <h1 class="display-4">Contact Book</h1>
        </div>
    </div>
      <div className = "row m-5">
          <div className = "col-sm-4">
            <ContactForm/>
          </div>
          <div className = "col-sm-8">
               {ListContainerComponent}
          </div>
        </div>
     </div>
  )}
}

/*
* mapping State with App Component's props 
*/
const mapStateToProps = (state) => {
  return {
      contactInfos : state.contactInfos
  }
}

/*
* connecting state with Component's props by using 
* connect method from react-redux;
*/
export default connect(mapStateToProps)(App);
