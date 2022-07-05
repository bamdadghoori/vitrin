import React from 'react'
import axios from 'axios'
import https from "https"
import Head from "next/head"

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
            <div className="post-title">
             {data.title}
            </div>
            <div className="post-body">
              {data.body}
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
