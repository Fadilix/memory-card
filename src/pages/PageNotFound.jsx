import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import "../scss/PageNotFound.scss"

const PageNotFound = () => {
  return (
    <div className='pnf'>
        <div style={{position: "absolute", top: 0, width: "100vw"}}>
        <NavBar />
        </div>
            <div className='content'>
                <p>404</p>
                <div className='vertical-line'></div>
                <p>PAGE NOT FOUND</p>
            </div>
        <Footer />
    </div>
  )
}

export default PageNotFound;