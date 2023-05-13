import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';
import contactReducer from './contactReducer';
import DetailContact from './DetailContact';


let nextId = 2;
const initialContacts = [
    { id: 0, name: 'Tomás Hernandez', address: 'Via La Costa', phone: '0912345678', select: false },
    { id: 1, name: 'Héctor Jiménez', address: 'Samborondon', phone: '0987654321', select: false },
];

function App3() {

    const [contacts, dispatch] = useReducer(contactReducer, initialContacts);

    const handleAddContact = ({ name, address, phone }) => {
        dispatch({
            type: 'add',
            contact: {
                id: nextId++,
                name,
                address,
                phone,
            }
        });
    }

    const handleViewContact = (contact) => {
        dispatch({
            type: 'select',
            contact,
        });
    }

    const handleDeleteContact = (id) => {
        dispatch({
            type: 'delete',
            id,
        });
    }

    return (
        <>
            <div style={{ flex: 1, flexDirection: 'row' }}>
                <h1>Contactos</h1>
                <h1>{JSON.stringify(contacts)}</h1>
                <AddContact onAddContact={handleAddContact} />
                <ContactList
                    contacts={contacts}
                    onChangeContact={handleViewContact}
                />
            </div>
            <div style={{ flex: 1, flexDirection: 'row' }}>
                <DetailContact contacts={contacts} onDeleteContact={handleDeleteContact} />
            </div>
        </>
    );
}


export default App3;
