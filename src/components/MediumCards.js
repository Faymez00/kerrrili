import React from 'react'

function MediumCards({img, title}) {
  return (
    <div className='pl-10 flex  '>
         <div className='flex  overflow-scroll scrollbar-hide  px-3 ' >
      {/*main div*/}
    <div className='hover:cursor-pointer hover:scale-105 transform transition duration-200  ease-out'>
        <div className='relative h-90 w-80 '>
        <img  src={img}
                   layout='fill'
                   className='rounded-xl'/>
        </div>
        <h3 className='text-3xl'> {title} </h3>
      </ div>
    </div>
    
    </div>
    
  )
}

export default MediumCards