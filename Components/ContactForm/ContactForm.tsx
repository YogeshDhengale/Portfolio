"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xwpkkrbk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='border-black'
      />
      <ValidationError 
        prefix="Email" 
        field={"email"}
        errors={state.errors}
      />
      <label htmlFor="email">
        Phone Number
      </label>
      <input
        id="mobile"
        type="tel" 
        name="Mobile"
        className='border-black'
      />
      <ValidationError 
        prefix="Mobile" 
        field={"mobile"}
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;