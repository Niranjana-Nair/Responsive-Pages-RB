import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                <img className='hero-image'
                    src="https://t4.ftcdn.net/jpg/04/69/99/97/240_F_469999701_ru2cVou65U8T09JGWus9UOlk39CWpsIr.jpg"
                />
                <h1>MAKE YOUR BORING RIDES A FUN RIDE</h1>
                <p>What are you waiting for?</p>
                <div className='hero-btns'>
                    <button
                        className="join-pool-btn"
                    >
                        JOIN POOL
                    </button>
                    <button
                        className="host-pool-btn"
                    >
                        HOST POOL
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeroSection