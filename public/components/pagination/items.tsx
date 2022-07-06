import React from 'react'
import { Typography } from '@mui/material';
 const Items = ({currentItems,handleClick}:{currentItems:any[],handleClick:(...args:any[])=>void}) => {
  return (
    <>
   {console.log(currentItems)}
   {
                
                currentItems.map((el)=>{
                  return <div key={el.id} className="col-md-3">
                    <div className="post" onClick={()=>handleClick(el)}>
                  <Typography textAlign="center" fontWeight="500">
                  {el.title}
                  </Typography>
                    
                    </div>
                    
                  </div>
                })
               }
    </>
  )
}
export default Items;
