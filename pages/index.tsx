import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Posts from '../public/components/posts'
import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { RootState,AppDispatch } from '../public/redux/store'
import axios from 'axios'
import { GetPostsFail,GetPostsRequest,GetPostsSuccess } from '../public/redux/posts/actions'
const Home: NextPage = () => {
  const[loading,setLoading]=useState(false)
  const dispatch:AppDispatch=useDispatch()
const getPosts=()=>{
  return async(dispatch:AppDispatch)=>{
    dispatch(GetPostsRequest())
    try{ 
         const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
         console.log(response)
    }
    catch(er){
        console.log(er)
    }
}
}
useEffect(()=>{
dispatch(getPosts());
},[])
  


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <h1 className="posts-title">Posts</h1>
<Posts/>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
