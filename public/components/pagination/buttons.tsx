import React from 'react'
import { useState } from 'react';
import { ButtonGroup,Button } from '@mui/material';
 const Buttons = ({currentPage,prevPage,nextPage,changePage,pageNumber}:{currentPage:number,prevPage:(...args:any[])=>void,nextPage:(...args:any[])=>void,changePage:(...args:any[])=>void,pageNumber:number}) => {
 
  let buttons=[]
  //creating buuton for each page
for(let i=0;i<pageNumber;i++){
  buttons[i]=i+1;
}


const handlenumberButtonClick=(page:number)=>{
    changePage(page)
  
}
const handlePrev=()=>{
 prevPage(currentPage)



}
const handleNext=()=>{
  nextPage(currentPage)
}
  return (
    <>
    <ButtonGroup variant="contained" aria-label="outlined primary button group"  sx={{"left":"33vw","position":"absolute"}} >
      {/* prev button */}
    <Button onClick={handlePrev} sx={{"background-color":"#ff6a00","border-color":"#FF4F00"}} >&#8249;</Button>
         {
          buttons.map((el,i)=>{
            return(
              currentPage==el ?(
<Button className="active number-button"  sx={{"background-color":"#ff6a00","border-right":"1px solid #ff4f00"}} onClick={()=>handlenumberButtonClick(el)}>{el}</Button>
              ):(
                <Button className="number-button" sx={{"background-color":"#ff6a00","border-right":"1px solid #ff4f00"}} onClick={()=>handlenumberButtonClick(el)}>{el}</Button>
              )
              
              
            )
          })
         }
         {/* next button */}
         <Button  sx={{"background-color":"#ff6a00","border-color":"#FF4F00"}} onClick={handleNext}>
         &#8250;
         </Button>
 
</ButtonGroup>
    </>
  )
}
export default Buttons;