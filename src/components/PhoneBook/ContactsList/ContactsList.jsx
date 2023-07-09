import React from 'react';

class ContactsList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.info.map(contact => {
            return (
              <li key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button
                  type="button"
                  onClick={() => this.props.deleteCont(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
