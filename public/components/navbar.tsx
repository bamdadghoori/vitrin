import React from 'react'
import Link from "next/link"
import { AppBar,Toolbar,Typography,IconButton } from '@mui/material';


 const Navbar = () => {
  return (
    <>
    <div className="posts-title">
   <AppBar position="relative">
  <Toolbar variant="dense" sx={{"background":"#ff6a00"}}>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      {/* <MenuIcon open={true}/> */}
    </IconButton>
    <Typography textAlign="center" variant="h5" component="div" position="absolute" left="45vw">
   <span><Link href={"/"}>Posts</Link></span>
    </Typography>
  </Toolbar>
</AppBar>
     </div>
    </>
  )
}
export default Navbar;
