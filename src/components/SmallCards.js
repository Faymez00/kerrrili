import React from 'react'
import { useHistory } from 'react-router-dom';
import './SmallCards.css'

function SmallCard() {
            const history =useHistory();
               const informations= ()=> history.push({
            //passing object 
            pathname:"/SearchPage",
            query:{
                location: "lux",
            }
          })
  return (
      <div className='pl-10 pt-10'>
          <h2 className=' text-4xl font-semibold pb-5' >
             Wilayas you can move to
           </h2>
           <section className='flex'>
         <div className=' relative grid grid-cols-1   '>
             {/*item1*/}
    <div >
        <div onClick={informations}
        className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer 
        hover:bg-gray-100 hover:text-gray-600  hover:scale-105 transition transform-200 ease-out'>
            <div className='relative h-16 w-16'>
                   <img  src="/pic3.jpg"
                   layout='fill'
                   className='rounded-lg'/>
            </div>
            <div>
                <h2 className=' text-sm sm:text-lg font-bold hover:text-gray-600 '> BEJAIA</h2>
            </div>
        </div>
    </ div>
      
    </div> 
    {/**another wilaya  */}
    <div className=' relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '>
             {/*item1*/}
    <div >
    
        <div onClick={informations}
        className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer 
        hover:bg-gray-100 hover:text-gray-600  hover:scale-105 transition transform-200 ease-out'>
            <div className='relative h-16 w-16'>
                   <img  src="/pic3.jpg"
                   layout='fill'
                   className='rounded-lg'/>
            </div>
            <div>
                <h2 className=' text-sm sm:text-lg font-bold hover:text-gray-600 '> BEJAIA</h2>
            </div>
        </div>
    </ div>
      
    </div> <div className=' relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '>
             {/*item1*/}
    <div >
    
        <div onClick={informations}
        className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer 
        hover:bg-gray-100 hover:text-gray-600  hover:scale-105 transition transform-200 ease-out'>
            <div className='relative h-16 w-16'>
                   <img  src="/pic3.jpg"
                   layout='fill'
                   className='rounded-lg'/>
            </div>
            <div>
                <h2 className=' text-sm sm:text-lg font-bold hover:text-gray-600 '> BEJAIA</h2>
            </div>
        </div>
    </ div>
      
    </div> <div className=' relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '>
             {/*item1*/}
    <div >
    
        <div onClick={informations}
        className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer 
        hover:bg-gray-100 hover:text-gray-600  hover:scale-105 transition transform-200 ease-out'>
            <div className='relative h-16 w-16'>
                   <img  src="/pic3.jpg"
                   layout='fill'
                   className='rounded-lg'/>
            </div>
            <div>
                <h2 className=' text-sm sm:text-lg font-bold hover:text-gray-600 '> BEJAIA</h2>
            </div>
        </div>
    </ div>
      
    </div> 
    </section>
    </div>
  )
}

export default SmallCard