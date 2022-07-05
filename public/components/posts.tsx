import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import NextNProgress from "nextjs-progressbar";
import Loading from './loading';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Typography } from '@mui/material';
 const Posts = () => {
  const data=useSelector((state:RootState)=>state.posts)
  const loading=useSelector((state:RootState)=>state.loading)
  const [linkLoading,setLinkLoading]=useState(false)
  const router=useRouter();
  const handleClick=(data:any)=>{
      setLinkLoading(true)
      router.push(`/post/${data.id}`)
  }
  return (
    <>
    {console.log(loading)}
{
  loading==true ? (
 <Loading/>
  ):(
    linkLoading ==true ? ( <NextNProgress
    color="#29D"
    startPosition={0.3}
    stopDelayMs={200}
    height={3}
    showOnShallow={true}
  />
    ):
    (
      <div className='posts'>
      <div className="container">
      <div className="row">
               {
                data &&
                data.map((el)=>{
                  return <div key={el.id} className="col-md-3">
                    <div className="post" onClick={()=>handleClick(el)}>
                  <Typography textAlign="center" fontWeight="500">
                  {el.title}
                  </Typography>
                    
                    </div>
                    
                  </div>
                })
               }
               </div>
               </div>
     </div>
    )
  )
}
    
    </>
   
  )
}
export default Posts;
