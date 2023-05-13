
export default function DetailContact({ contacts, onDeleteContact }) {

    const contact = contacts.filter(e => e.select === true);
    return (
        <div>
            {
                (contact.length > 0) && <Contact contact={contact[0]} onDeleteContact={onDeleteContact} />
            }
        </div>
    );
}
function Contact({ contact, onDeleteContact }) {
    return (
        <div>
            <p>{contact.name}</p>
            <p>{contact.address}</p>
            <p>{contact.phone}</p>
            <button
                onClick={() => {
                    onDeleteContact(contact.id);
                }}>
                Delete
            </button>
        </div>
    );
}