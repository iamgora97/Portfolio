import React from 'react'
import photo from '../assets/photo.png'

const About = () => {
  return (
    <div className='flex justify-center pt-5'>
        <div className='m-10 h-[110px] w-[900px]'>
           <div>
            <img src={photo} width={'300px'} height={'300px'}  alt="" />
           </div>
        </div>
        <div className='text-gray-400/90 text-left m-10'>
        Driven by a commitment to precision and software excellence, I am a Functional Test Automation Enthusiast with a keen eye for detail. With a proven track record of identifying bugs across diverse projects, I ensure product reliability through rigorous regression and functional testing. Proficient in manual testing and skilled in Java, I also have knowledge of test scripts using Selenium and MySQL. At Wipro, I have honed my expertise in functional and regression testing. My HackerRank certifications in problem-solving, Java, Python, and CSS reflect my dedication to excellence. Continuously expanding my knowledge in automation tools like JUnit, Jenkins, JMeter, and Playwright, I am eager to leverage my technical and analytical skills to contribute to your organization's success and elevate its software quality.
        </div>
    </div>
  )
}

export default About