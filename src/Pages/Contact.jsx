import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='text-3xl md:text-4xl font-bold'>Contact Us</h1>
      <p className='text-lg mt-4'>If you have any questions, feedback, or inquiries about our ID Card Generator, please feel free to reach out to us. We value your input and are here to assist you in any way we can.</p>
      <p className='text-lg mt-4'>You can contact us through the following channels:</p>
      <ul className='list-disc list-inside mt-2'>
        <li>Email: <a href="mailto:info@idcardgenerator.com" className='text-blue-500 hover:underline'>info@idcardgenerator.com</a></li>
      </ul>
    </div>
  )
}

export default Contact