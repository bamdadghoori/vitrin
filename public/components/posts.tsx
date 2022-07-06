import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import NextNProgress from "nextjs-progressbar";
import Loading from './loading';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Items from './pagination/items';
import Buttons from './pagination/buttons'
 const Posts = () => {



  const data=useSelector((state:RootState)=>state.posts)
  const loading=useSelector((state:RootState)=>state.loading)
  const [linkLoading,setLinkLoading]=useState(false)
  const router=useRouter();
  //pagination
  const itemsPerPage=12;
const pageNumber=Math.floor(data.length/itemsPerPage)+1 
const [currentPage,setCurrentPage]=useState(1)
const endOfCurrentItems=(currentPage*itemsPerPage)
const startOfCurrentItems=endOfCurrentItems-itemsPerPage;
    const currentItems=data.slice(startOfCurrentItems,endOfCurrentItems)
    
  const handleClick=(data:any)=>{
      setLinkLoading(true)
      router.push(`/post/${data.id}`)
  }
  const changePage=(page:number)=>{
        setCurrentPage(page)
  }
  const prevPage=(page:number)=>{
    if(page==1){
      setCurrentPage(pageNumber)
    }
    else{
      setCurrentPage(page-1)
    }
  }
  const nextPage=(page:number)=>{
    if(page==pageNumber){
      setCurrentPage(1)
    }
    else{
      setCurrentPage(page+1)
    }

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
      <>
             

      <div className='posts'>
      <div className="container">
      <div className="row">
      {currentItems &&(
        <>
        <Items currentItems={currentItems} handleClick={handleClick}/>
       
        </>
      ) }
      
            
              
               </div>
               </div>
               <Buttons currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} changePage={changePage} pageNumber={pageNumber} />
     </div>
     </>
    )
  )
}
    
    </>
   
  )
}
export default Posts;
