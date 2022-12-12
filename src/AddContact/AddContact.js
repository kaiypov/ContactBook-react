import React, {useState} from "react";
import './AddContact.css'
const AddContact = ({handleNewContact}) => {
    let [name, setName] = useState('')
    let [surname, setSurname] = useState('')
    let [phone, setPhone] = useState('')
    
    function handleClick(){
        let newContact = {
            name,
            surname,
            phone,
            id: Date.now()
        }
        handleNewContact(newContact)
        setName('')
        setSurname('')
        setPhone('')
    }

    return (
        <div className="block">
            <h2>ContactBook</h2>
            <input onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Name" value={name} />
            <input onChange={(e)=>setSurname(e.target.value)} type="text" placeholder="Surname" value={surname}/>
            <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Phone" value={phone}/>
             <button onClick={handleClick} >Add Contact</button>
        </div>
    );
};

export default AddContact;
