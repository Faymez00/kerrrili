import React from 'react';

 function InfoCardcomp({img,title,location,description,price}) {
    return (
      <div className=' flex py-7 px-2 border-b cursor-pointer hover:opacity-80 
      hover:shadow-lg transition-200 ease-out  pl-10 '>
  
          <div className='relative  h-24 w-40 md:h-52 md:x-80 flex-shrink-0  '>
              <img src={img} className='rounded-lg' layout='fill' objectFit='cover'  />
          </div>
  
  
          <div className='flex flex-col flex-grow pl-5'>
              
               <div className='flex justify-between'>
                  <p>{location}</p>
               </div>
  
              <h4 className='text-xl '>{title}</h4>
  
              <div className='border-b w-10 pt-2'/>
  
              <p className= ' pt-2 text-sm text-gray-500 flex-grow  '>{description}</p>
              </div>
  
          <div className='flex flex-col justify-between'>
                  <p className='text-lg font-semibold pb-2  lg:2xl pl-10'>{price}/</p>
          </div>
  </div>
          
     
    )
  }
  export default InfoCardcomp