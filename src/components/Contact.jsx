import React from 'react'
import '../App.css'


const Contact = () => {
  return (
    <div className='pt-14'>
        <section id='contact' className='mx-auto py-10 flex flex-col gap-4 items-center justify-center pt-40'>
        {/* <p className=' text-lg text-orange-600 font-semibold flex items-center justify-center'>04. What's Next?</p> */}
        <h2 className=' text-5xl font-semibold text-gray-300/90'>Get In Touch</h2>
        <p className='max-w-[600px] text-center text-gray-500'>I would love to hear more from you!</p>
        {/* <a  href="mailto:gourobnandi28@gmail.com" target='_blank' rel="noopener noreferrer"><button className='w-40 h-14 border border-orange-600/90 mt-6 font-bold text-sm text-orange-600/90 tracking-wider rounded-md hover:bg-orange-600/90 hover:text-gray-900 duration-300'>Say Hello!</button></a> */}

        <button class="btn" id='button1'><a href="mailto:gourobnandi28@gmail.com" target='_blank' rel="noopener noreferrer">Say Hello!</a></button>
    </section>
    </div>
  )
}

export default Contact