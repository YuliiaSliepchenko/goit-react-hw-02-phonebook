import { nanoid } from 'nanoid';
import { Component } from 'react';
import  Form  from './FormContacts/FormContacts';


export class App extends Component {
 
  nameId = nanoid();
  
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    
    return (
      <div>
     <Form onSubmit={this.formSubmitHandler}/>
        </div>
    );
  }
}