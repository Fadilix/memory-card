import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import "../scss/PageNotFound.scss"

const PageNotFound = () => {
  return (
    <div className='pnf'>
        <NavBar />
            <div className='content'>
                <p>404</p>
                <div className='vertical-line'></div>
                <p>PAGE NOT FOUND</p>
            </div>
        <Footer />
    </div>
  )
}

export default PageNotFound