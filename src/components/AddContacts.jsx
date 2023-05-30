import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const AddContacts = ({CreateContact}) => {
  
  const validationSchema = Yup.object({
    name: Yup.string().required('This field is Required'),
    phone: Yup.number().required('This field is Required'),
    address: Yup.string().required('This field is Required')
  })

  const initialValues = {
    name: "",
    phone: "",
    address: "",
  };

  const handleSubmit = (values) => {
    // console.log(values);
    CreateContact(values);
    values.name = "";
    values.phone = "";
    values.address = "";
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
      <Form className="w-[500px] p-6 my-6 bg-white shadow-2xl rounded-md flex flex-col items-center justify-center gap-3">
        <h1 className="font-bold text-2xl text-slate-800 p-2">Add Contacts</h1>
        <Field
          type="text"
          name="name"
          placeholder="Enter Name"
          className="w-full p-3 border  rounded outline-slate-700"
        />
        <ErrorMessage name="name" component="div" className="w-full pb-[-1px] text-red-600 font-medium"/>
        <Field
          type="text"
          name="phone"
          placeholder="Enter Phone"
          className="w-full p-3 border  rounded outline-slate-700"
        />
        <ErrorMessage name="phone" component="div" className="w-full pb-[-1px] text-red-600 font-medium"/>
        <Field
          type="text"
          name="address"
          placeholder="Enter Address"
          className="w-full p-3 border  rounded outline-slate-700"
        />
        <ErrorMessage name="address" component="div" className="w-full pb-[-1px] text-red-600 font-medium"/>
        <button type="submit" className="p-3 w-full bg-slate-700 hover:bg-slate-800 text-white rounded-lg">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default AddContacts;
