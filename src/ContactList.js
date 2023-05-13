import { useState } from 'react';

export default function ContactList({ contacts, onChangeContact }) {
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} onChange={onChangeContact} />
                </li>
            ))}
        </ul>
    );
}

function Contact({ contact, onChange }) {
    const [select, setSelect] = useState(false);

    const handleSelect = () => {
        setSelect(!select)
        onChange({
            ...contact,
            select: select,
        })
    }
    let contactContent = (
        <>
            {contact.name}
        </>
    );
    return (
        <div onClick={handleSelect}>
            {contactContent}
        </div>
    );
}