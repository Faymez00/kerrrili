import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import InfoCardcomp from './InfoCardcomp';
import axios from'axios'

function Filactualite ()  {
    const [anonces,setannonces]=useState([]);
     const [ post, setPost] = useState({
        typeLocation: "",
        duree_a:"0",
        duree_m:"0",
        duree_j:"",
        tarif:"",
        tarif_par:"",
        wilaya:"",
        daira:"",
        commune:"",
        adresse:"",
        etage:"0",
        typeBien:"",
        autre:"",
        autreInfo:"",
        image1:"",
        image2:"",
        image3:"",
        image4:"",
        email:""
      })
    let  [,setState]=useState();
    const  [anounces,setanounces]=useState([]);
    
    
    const getAllPosts = async ()=>{
        axios.post("http://localhost:9002/getAllPosts", post)
            .then(res => {
                alert(res.data.message)
                this.setannonces({anonce:res.data})


      })}



    return (
<section>
<h1 className='text-4xl font-semibold p-6  '> Bienvenu dans la fil d'actualité: </h1>
 <div className=' border  border-gray-300 w-[550px]'/>
 {/* les announce  */}
   <div className=' flex flex-col space-y-12 p-6 rounded-lg shadow-lg '>

{ anonces.map(anonce =>(
    <div className='flex  '> 

    <div className='flex relative  h-52 x-80 rounded-xl flex-shrink-0   '>
                      
             <div className='rounded-xl'>
                 <img className=' object-cover w-full h-full '  src={anonce.image1[0]} />
             </div> 
         </div>
             <div className=' flex flex-col pl-10 scale-y-2'>
                 <h1 className='text-2xl font-semibold '>{anonce.typeLocation} </h1>
                 <h2 className='text-xl '>{anonce.adresse}</h2>
                   <div className='flex text-lg text-gray-400 '> 
                 <div><h1 className='ml-10'> {anonce.wilaya}</h1> </div>
                 <div><h1 className='ml-10'> {anonce.daira} </h1> </div>
                 <div><h1 className='ml-10'> {anonce.commune}</h1> </div>
                    </div>
                 <h2 className='text-xl '>{anonce.typeBien}</h2>
                    <div className='flex'>
                 <h1 className='text-gray-500  '>{anonce.etage} </h1>
                 <h1 className='ml-20 text-4xl font-semibold '>{anonce.tarif} par {anonce.tarif_par}</h1>
                   </div>
                 <p>   {anonce.email}   </p>
             </div>
             
    </div>))              }



      {/* 1)une  announce  */}
<div className='flex  '> 

   <div className='flex relative  h-52 x-80 rounded-xl flex-shrink-0   '>
                     {/* l'image de l' announce  */}
            <div className='rounded-xl'>
                <img className=' object-cover w-full h-full '  src="/pic3.jpg" />
            </div> 
        </div>
            <div className=' flex flex-col pl-10 scale-y-2'>
                <h1 className='text-2xl font-semibold '>le type de location </h1>
                <h2 className='text-xl '>ladress de lapartement </h2>
                  <div className='flex text-lg text-gray-400 '> 
                <div><h1 className='ml-10'> la wilaya</h1> </div>
                <div><h1 className='ml-10'> la daira </h1> </div>
                <div><h1 className='ml-10'> la commune</h1> </div>
                   </div>
                <h2 className='text-xl '> type du bien </h2>
                   <div className='flex'>
                <h1 className='text-gray-500  '>nmbr d'etage </h1>
                <h1 className='ml-20 text-4xl font-semibold '>Prix </h1>
                  </div>
                <p>providers email </p>
            </div>
            
   </div>

 </div>
            
            
        </section>
      )
    }
export default Filactualite;