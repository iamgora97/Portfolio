import React from 'react';
import '../App.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center pb-5 pt-4 px-10 sticky top-0 z-50 bg-[#111111]' style={{ boxShadow: '0 20px 70px -10px rgba(231,240,220,0.05)'}}>
      <div className='text-2xl md:text-4xl text-[#B5C18E] font-extrabold pt-3 md:pt-0'>
        Gourob Nandi
      </div>

      <div className='flex flex-col md:flex-row items-center md:justify-between'>
        <div className='flex gap-4 pt-4 md:pt-0'>
          <a href="https://github.com/iamgora97" target='_blank' rel="noreferrer">
            <FaGithub className='w-5 h-5 text-[#B6C7AA] hover:text-[#B5C18E]'/>
          </a>
          <a href="https://www.linkedin.com/in/gourob-nandi/" target='_blank' rel="noreferrer">
            <FaLinkedin className='w-5 h-5 text-[#B6C7AA] hover:text-[#B5C18E]'/>
          </a>
          <a href="mailto:gourobnandi28@gmail.com" target='_blank' rel="noreferrer">
            <IoMdMail className='w-6 h-6 pb-1 text-[#B6C7AA] hover:text-[#B5C18E]'/>
          </a>
        </div>

        <button className='mt-4 md:mt-0 md:ml-12'>
          <a href="https://resume.gourobnandi.com" target="_blank" rel="noreferrer" className="btn2" id='button2'>
            <span className="spn2">Resume</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;