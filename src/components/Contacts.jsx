import React from 'react';
import { IoMdTrash } from "react-icons/io";

const Contacts = (props) => {
    const { contacts, deleteContact } = props;
    
    return (
        <table className='w-1/2 bg-white shadow-md border-collapse mt-3 rounded overflow-hidden'>
            <thead>
                <tr className='border border-slate-700 bg-slate-700 text-white p-3'>
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Address</th>
                    <th className="p-3">Action</th>
                </tr>
            </thead>       
            <tbody>
               {contacts.map(contact => 
               <tr className='bg-white even:bg-gray-200 hover:bg-slate-300' key={contact.id}>
                 <td className='border border-slate-700 p-3 text-center'>{contact.id}</td>
                 <td className='border border-slate-700 p-3 text-center'>{contact.name}</td>
                 <td className='border border-slate-700 p-3 text-center'>{contact.phone}</td>
                 <td className='border border-slate-700 p-3 text-center'>{contact.address}</td>
                 <td className='border border-slate-700 p-3 ' onClick={() => deleteContact(contact.id)}><IoMdTrash className='cursor-pointer text-[24px] relative left-[30px] text-red-600'/></td>
               </tr>
               )}
            </tbody>     
        </table>
    )
}

export default Contacts;