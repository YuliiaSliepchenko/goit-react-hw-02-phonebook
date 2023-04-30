import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class Form extends Component {
   state = {
    // contacts: [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    // filter: '',
    name: '',
    number: '',
};

    nameId = nanoid();
    numberId = nanoid();

    handleChange = e => {
        const  {name ,value } = e.currentTarget;
         this.setState({[name]: value });
         };

    handleSubmit = e => {
        const { name, number} =this.state;
            e.preventDefault();
          
            this.props.contactAdd({name: name, number:number});
            this.reset()
           };

           reset = () => {
            this.setState({ name: '', number: ''})
           };

        //    contactAdd = ({ name, number }) => {
        //     this.setState({
        //     contacts: [{ id: nanoid(), name, number}, ...this.state.contacts],
        // });
        //    };
        //    filterOn = e => {
        //     this.setState({filter:e.currentTarget.value})
        //    };
          
   render() {
    // const contactsArey =this.state.contacts;
    // const { filter, contacts } = this.state;
    // const normalize = filter.toLowerCase();
    // const contactAvaileble = contacts.filter(contact => {
    //     return contact.name.toLowerCase().includes(normalize);
    // });
    return ( 
        // <div>
        //     <div>
        //         <h2>Phonebook</h2>
                
         <form onSubmit={this.handleSubmit}>
            <title>Name</title>
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
            <title>Number</title>
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
          
        //   </div>

        //   <div>
        //     <h2>Contacts</h2>
        //     <span>Find contacts by name</span>
        // <label htmlFor="">
        //     <input 
        //     value={this.state.filter}
        //      onChange={this.filterOn} 
        //       type="text" />
        //        <input/>
        //       </label>
        //     <ul>
        //   {contactAvaileble.map(({id, name, number}) => {
        //      return (
        //       <li key={id}>
        //          {name}: {number} 
        //          </li>
        //          );
        //       })}
        //     </ul>
        //    </div>
        //   </div>
         );
      }
    }
   Form.propTypes = {
    contactAdd:PropTypes.func.isRequired,
   };

export default Form;