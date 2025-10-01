import React from 'react'
import Navbar from '../components/Navbar'
import Footbar from '../components/Footbar'

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <Footbar />
        </div>
    )
}

export default Home