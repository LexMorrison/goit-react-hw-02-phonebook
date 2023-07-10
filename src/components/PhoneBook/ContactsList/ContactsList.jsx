import React from 'react';
import { ListOfPpl, DeleteButt } from './ContatsList.styled';

class ContactsList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.info.map(contact => {
            return (
              <ListOfPpl key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <DeleteButt
                  type="button"
                  onClick={() => this.props.deleteCont(contact.id)}
                >
                  Delete
                </DeleteButt>
              </ListOfPpl>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
