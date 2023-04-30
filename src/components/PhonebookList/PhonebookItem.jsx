import PropTypes from 'prop-types';

const PhoneItem = ({id, name, number, deleteContact}) => {
    return (
        <div>
            <li key={id}>
                {name}: {number}
<button onClick={() => deleteContact(id)} type="button" id={id}>
    Delete
    </button>
      </li>                  
      </div>
    );
};
PhoneItem.propTypes = {
    id:PropTypes.number.isRequired,
     name:PropTypes.string.isRequired,
      number:PropTypes.number.isRequired,
       deleteContact:PropTypes.func.isRequired 
}

export default PhoneItem;