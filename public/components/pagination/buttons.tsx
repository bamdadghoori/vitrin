import React from 'react'
import { useState } from 'react';
import { ButtonGroup,Button } from '@mui/material';
 const Buttons = ({currentPage,prevPage,nextPage,changePage,pageNumber}:{currentPage:number,prevPage:(...args:any[])=>void,nextPage:(...args:any[])=>void,changePage:(...args:any[])=>void,pageNumber:number}) => {
  const [active, setActive] = useState(false);
  let buttons=[]
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
    <Button onClick={handlePrev} sx={{"background-color":"#ff6a00","border-color":"#FF4F00"}} >&#8249;</Button>
         {
          buttons.map((el,i)=>{
            return(
              currentPage==el ?(
<Button className="active"  sx={{"background-color":"#ff6a00","border-right":"1px solid #ff4f00"}} onClick={()=>handlenumberButtonClick(el)}>{el}</Button>
              ):(
                <Button  sx={{"background-color":"#ff6a00","border-right":"1px solid #ff4f00"}} onClick={()=>handlenumberButtonClick(el)}>{el}</Button>
              )
              
              
            )
          })
         }
         <Button  sx={{"background-color":"#ff6a00","border-color":"#FF4F00"}} onClick={handleNext}>
         &#8250;
         </Button>
  {/* <Button onClick={handlenumberButtonClick}>1</Button> */}
  {/* <Button>2</Button>
  <Button>3</Button> */}
</ButtonGroup>
    </>
  )
}
export default Buttons;