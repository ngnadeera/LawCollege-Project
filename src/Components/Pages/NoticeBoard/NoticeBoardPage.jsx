import React from 'react'
import NoticeBoard from './NoticeBoard'
import Footer from '../../Inc/Footer'
import Header from './Header'
import { useEffect } from 'react'

const NoticeBoardPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, [])



  return (

    
    <div>
        <Header/>
        <NoticeBoard/>
        <div style={{marginTop:"80px"}}>    <Footer/></div>
    
      
    </div>
  )
}

export default NoticeBoardPage
