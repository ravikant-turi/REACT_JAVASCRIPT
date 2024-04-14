import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {

    const data=useLoaderData()
//   const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ravikant-turi')
    //     .then(response=>response.json())

    //     .than(data=> {
    //         console.log(data)
    //         setData(data);
    //     })

    // },[])
  return (
    <div 
    className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex'>
        GitHUb Follower :{data.followers}
        <img src={data.avatar_url} alt="Git-Picture"  width={300}/>
      
    </div>
  )
}

export default GitHub

export const githubInfoLoader=async()=>{
   const responce=await fetch('https://api.github.com/users/ravikant-turi')

   return responce.json();

}
