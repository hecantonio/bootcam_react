import { useState } from 'react';

export default function AddContact({ onAddContact }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <button
                onClick={() => {
                    setName('');
                    setAddress('');
                    onAddContact({ name, address, phone });
                }}>
                Add
            </button>
        </>
    );
}