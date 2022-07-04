import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import NextNProgress from "nextjs-progressbar";
import Loading from './loading';


 const Posts = () => {
  const data=useSelector((state:RootState)=>state.posts)
  const loading=useSelector((state:RootState)=>state.loading)
  return (
    <>
    {console.log(loading)}
{
  loading==true ? (
 <Loading/>
  ):(
    <div className='posts'>
    <div className="container">
    <div className="row">
             {
              data &&
              data.map((el)=>{
                return <div key={el.id} className="col-md-4">
                  <div className="post">
                  {el.title}
                  </div>
                  
                </div>
              })
             }
             </div>
             </div>
   </div>
  )
}
    
    </>
   
  )
}
export default Posts;
