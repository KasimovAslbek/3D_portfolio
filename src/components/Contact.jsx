import React from 'react'
import MapChart from './Map'
import { useState } from 'react';



export default function Contact() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
  
      try {
        const response = await fetch('https://formspree.io/f/mrgvakkr', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.error('Error sending message: ', error);
        alert('There was an error sending your message. Please try again later.');
      }
    };
  
  return (
    <div className='pt-10 md:pt-0 md:h-screen snap-center'>
        <div className='md:w-full mx-auto h-screen md:flex items-center justify-between gap-12'>
            <div className='md:w-1/2 mx-auto flex flex-col items-end justify-center gap-6 '>
                <h2 className='font-extralight text-3xl mx-auto'>Contact US</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 md:w-2/3 mx-auto pb-10 md:pb-0 text-black'>
                  <input className='p-2 md:p-5 bg-gray-100 rounded' type="text" placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                  <input className='p-2 md:p-5 bg-gray-100 rounded' type="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
                  <textarea className='p-2 md:p-5  bg-gray-100 rounded' rows={10} placeholder='Message' value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                  <button type='submit' className='bg-pink-500 cursor-pointer font-bold rounded w-fit mx-auto py-2 px-8'>Send</button>
                </form>
            </div>
            <div className='md:w-1/2 w-full '>
                <MapChart/>
            </div>
        </div>
    </div>
  )
}
