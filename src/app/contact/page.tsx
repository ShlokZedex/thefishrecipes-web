"use client"

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { cachedClient } from '../../../sanity/lib/client';
import { categoriesQuery } from '../../../sanity/lib/queries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactUsPage: React.FC = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values: typeof initialValues, actions: any) => {
    // Perform submit logic here (e.g., sending the form data to a server)
    console.log(values);
    actions.setSubmitting(false);
    actions.resetForm(); // Reset the form values
  };

  
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await cachedClient(categoriesQuery);
        setCategories(response);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
    <Navbar categories={categories} />
    <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className='flex flex-col'>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">Name</label>
            <Field type="text" id="name" name="name" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
            <Field type="email" id="email" name="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-1">Message</label>
            <Field as="textarea" id="message" name="message" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <ErrorMessage name="message" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded self-center">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
    <Footer />
    </>
  );
};

export default ContactUsPage;