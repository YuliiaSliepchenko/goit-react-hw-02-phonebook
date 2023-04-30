import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
   state = {
    contacts: [],
    name: '',
};

    nameInputId = nanoid();

    handleChange = e => {
        const  {name ,value }= e.currentTarget;
         this.setState({[name]:value,});
         };

    handleSubmit = e => {
            e.preventDefault();
            this.props.onSubmit(this.state);
            this.reset()
           };

           reset = () => {
            this.setState({contacts: [], name: '',})
           };

           contactAdd = ({ name }) => {
            this.setState({
            contacts: [{ id: nanoid(), name}, ...this.state.contacts],
        });
           };
          
   render() {
    const contactsArey =this.state.contacts;
    return ( 
        <div>
            <div>
                <h2>Phonebook</h2>
                <span>Name</span>
         <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}></label>
          <input type="text" name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
           value={this.state.name} 
           onChange={this.handleChange}
           id={this.nameId}
            />
          
          <button type="submit">Add contacts</button>
          </form>
          </div>

          <div>
            <h2>Contacts</h2>
            <ul>
          {contactsArey.map(element => {
             return <li key={element.id}> {element.name} </li>;
              })}
            </ul>
           </div>
          </div>
           ) ;
   }
}
export default Form;