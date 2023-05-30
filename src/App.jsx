import React , { useState, useEffect } from 'react'
import Contacts from './components/Contacts'
import AddContacts from './components/AddContacts'
import axios from 'axios'

function App() {

  const [contacts , setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9004/contacts')
    .then((response) => {
      // console.log(response)
      setContacts(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  const CreateContact = (ContactData) => {
    axios.post('http://localhost:9004/create_contact', ContactData)
    .then(res => {
      console.log(res);
      setContacts((prevContacts) => [...prevContacts, res.data]);
    })
    .catch(err => {
      console.log(err)
    })
  };

  const deleteContact = (id) => {
    axios.delete(`http://localhost:9004/delete_contact/${id}`)
    .then(() => {
      setContacts((prevContacts) => 
        prevContacts.filter((contact) => contact.id !== id)
      )
    })
    .catch((err) => {
      console.log(err)
    })

  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 ">
      <h1 className='text-3xl font-bold p-2 text-slate-800'>Address Book App</h1>
      <AddContacts CreateContact={CreateContact}/>
      <Contacts contacts={contacts} deleteContact={deleteContact}/>
    </div>
  )
}

export default App
