import React, { useState } from 'react'
//import './Header.css'
import { SearchIcon, MenuIcon, UserCircleIcon} from '@heroicons/react/solid'
import { useHistory } from 'react-router-dom';
function Header({placeholder}) {
    const history = useHistory();
    const[searchInput, setSearchInput] = useState(""); 
          const informations= ()=> history.push({
            //passing object 
            pathname:"/SearchPage",
            query:{
              location: searchInput.toLowerCase().toString(),
            }
          })

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
        <div   className='relative flex  items-center h-10 cursor-pointer my-auto ' >
         <img
         onClick={history.push("/")}
          src='kerrili_logo.png' 
         className='w-30 h-20 p-2 bg-transparent' />
         </div>
         
         <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm '>
        
             <input 
             //recuperer la valeur de la bar de recherche 
             value={searchInput}
             onChange={(e)=> setSearchInput(e.target.value)}
             type="text" 
            
             placeholder={  placeholder || ' Commancer votre recherche'}
             className=' flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 '/>
       
          <SearchIcon     onClick={informations} 
          className=' hidden md:inline-flex h-8 bg-purple-400
           text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2  hover:bg-teal-400 ' />
            
        </div>
         {/*right  part */}
          
         <div className='flex items-center space-x-4 justify-end'>
          {
              <div 
               onClick={()=>history.push("/Login")}

                   className=' text-purple-100 bg-purple-400 px-10 py-2 shadow-md rounded-lg cursor-pointer
                                         font-bold my-3  hover:shadow-xl  hover:bg-teal-400 hover:text
                                         -white active:scale-90 transition duration-150 '>
             Login| register
           </div>

          }
           
           
            <div className='flex items-center space-x-2 border-2 p-2 shadow-md 
            shadow-purple-300 rounded-full cursor-pointer '>
              <MenuIcon  className='h-6'  /> 
              <UserCircleIcon className='h-6' />
            </div> 

        </div>
        

    </header>
  )
}

export default Header