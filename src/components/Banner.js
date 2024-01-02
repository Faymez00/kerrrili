import React from 'react'
import './Banner.css'
import { useHistory } from 'react-router-dom';




function Banner() {

  const history = useHistory();
  return (
    <div className='banner__div '>
        
        <img className='ban__img'
         src="/pic3.jpg" alt='bannerimg'/>
        <div className='absolute top-1/2 w-full text-center '  >
          <p className=' text-sm sm:text-lg font-bold text-white '> Cherchez-vous un toit ? </p>
          <button onClick={()=>history.push("/logedinfileactualite")}// onClick={()=>router.push("/file_actualite")} 
          className='text-purple-500 bg-white px-10 py-5 shadow-md  rounded-full 
          font-bold my-3  hover:shadow-xl  hover:bg-teal-400 hover:text-white active:scale-90 
          transition duration-150'>
           La fil d'actualité
             </button>
             
      

        </div>
    </div>




  )
}

export default Banner