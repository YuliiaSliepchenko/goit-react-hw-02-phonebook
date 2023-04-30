import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
   state = {
    contacts: [],
    name: '',
    number: '',
};

    nameId = nanoid();
    numberId = nanoid();

    handleChange = e => {
        const  {name ,value }= e.currentTarget;
         this.setState({[name]:value,});
         };

    handleSubmit = e => {
        const { name, number} =this.state
            e.preventDefault();
            console.log(this.state);
            this.contactAdd({name: name, number:number});
            this.reset()
           };

           reset = () => {
            this.setState({contacts: [], name: '', number: ''})
           };

           contactAdd = ({ name, number }) => {
            this.setState({
            contacts: [{ id: nanoid(), name, number}, ...this.state.contacts],
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
        <label htmlFor={this.nameId}>
          <input type="text"
           name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
           value={this.state.name} 
           onChange={this.handleChange}
           id={this.nameId}
            />
            </label>

           <label htmlFor={this.numberId}>
          <input
           type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
           value={this.state.number} 
           onChange={this.handleChange}
           id={this.numberId}
            />
            </label>
          <button type="submit">Add contacts</button>
          </form>
          </div>

          <div>
            <h2>Contacts</h2>
            <ul>
          {contactsArey.map(({id, name, number}) => {
             return (
              <li key={id}>
                 {name}: {number} 
                 </li>
                 );
              })}
            </ul>
           </div>
          </div>
         );
      }
    }
   

export default Form;