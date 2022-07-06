import React from 'react'
import axios from 'axios'
import https from "https"
import Head from "next/head"
import { Typography } from '@mui/material';
 const Post = ({data}:{data:any}) => {
  return (
    <>
    <Head>
        <title>{data.title}</title>
    <meta name="description" content={data.body}/>
    </Head>

    
    {console.log({data})}
    <div className="container">
 
        <div className="post-details">
            <div>
            <Typography textAlign="center" fontWeight="bold">
             {data.title}
             </Typography>
            </div>
            
            <Typography textAlign="center" fontWeight="300" sx={{mt:"5vh"}}>
              {data.body}
              </Typography>
            
            <div>
            <Typography color="#ff6a00" textAlign="center" fontWeight="300" sx={{mt:"5vh"}}>
              Created by user number {data.userId}
              </Typography>
            </div>
        </div>
        </div>
    
    </>
   
  )

 
}
axios.defaults.httpsAgent=new https.Agent({
    rejectUnauthorized:false,
  })
export const getServerSideProps=async(context:any)=> {
    let data=[]
    const id=context.params.id;
    console.log(context.params)
    try{
        const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        data=response.data;
    }
    catch(er:any){
        console.log(er.message)
    }
     return{
        props:{data:data}
     }
}
export default Post;
