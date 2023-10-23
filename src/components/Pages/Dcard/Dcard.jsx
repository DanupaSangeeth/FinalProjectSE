import React from 'react'
import featuredImg from '../../../assets/feature.svg'
import featuredImg1 from '../../../assets/feature1.svg'
import featuredImg2 from '../../../assets/feature2.svg'

const Dcard = () => {
  return (
    <div>
         <div className="w-full lg:w-3/4 mt-20 ml-48 mb-20">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer'>
                 <a href='/exam'><div data-aos="fade-right">
                    <img src={featuredImg} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Examination Details</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer md:mt-16'>
                <a href='/reg'><div data-aos="zoom-in-up">
                    <img src={featuredImg1} alt=""/>
                    <h5 className='text-2xl font-semibold text-indigo-800 px-5 text-center mt-5'> Applicant Registration Details</h5>
                </div></a>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer '>
                <div  data-aos="fade-left">
                    <img src={featuredImg2} alt=""/>
                    <h5 className='text-2xl font-semibold text-blue-600 px-5 text-center mt-5'>Schedule Information</h5>
                </div>
            </div>

            

            

            </div>
        </div>
    </div>
  )
}

export default Dcard;