

const contactReducer = (contacts, action) => {
    switch (action.type) {
        case 'add':
            return addContact(contacts, action.contact)
        case 'select':
            return selectContact(contacts, action.contact)
        case 'delete':
            return contacts.filter((t) => t.id !== action.id);
        default:
            break;
    }
}

function addContact(contacts, contact) {
    return [
        ...contacts,
        {
            ...contact,
        },
    ];
}

function selectContact(contacts, contact) {
    return contacts.map((t) => {
        let e;
      if (t.id === contact.id) {
        e = contact;
      } else {
        e = {
            ...t,
            select: false
        };
      }
      return e;
    });
  }

export default contactReducer;