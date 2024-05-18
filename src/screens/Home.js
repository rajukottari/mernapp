import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Footer from '../components/Footer'

export default function Home() {
    return (

        <div>
            <div><Navbar /></div>
            <div><Carousal/></div>
            <div className='m-3'><Card/></div>
            <div><Footer/></div>
            
        </div>
    )
}
