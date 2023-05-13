import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

function Video() {
  interface verify{
    author:String,
    category:String,
    description:String,
    details:String,
    id:String,
    image:String,
    like:Number,
    quote:String,
    title:String,
    view:Number,
    youtube:String
  }
  const [data,setData]=useState<verify[]>([]);
  const [flag,setFlag]=useState(false);

  useEffect(()=>{
    fetch('https://6453bfbdc18adbbdfea68ba0.mockapi.io/recovery')
    .then((res)=> res.json())
    .then((res)=>{
      console.log(res);
      setData(res);
      setFlag(true);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    flag ? 
    <div className='my-20'>
      <hr/>
      <h2 className='text-white text-6xl my-6 font-bold'>HEALTH SESSION</h2>
      <hr/>
      <div className='grid lg:grid-cols-3 gap-4 my-10 sm:grid-cols-1 md:grid-cols-2' >
        {data?.map((el)=>{
       return <div className=' text-white w-5/6 text-left m-auto shadow-lg'>
        <ReactPlayer
        width={''}
        url={`${el['youtube']}`}
        controls={true}
        />
        <h3 className='text-2xl'>{el['title']}</h3>
        <p className='line-clamp-2'>{el['description']}</p>
      </div>
      })
      }
      </div>
    </div> : <h1>Loading...</h1>
  )
}

export default Video