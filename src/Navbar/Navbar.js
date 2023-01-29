import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='Navbar'>
            <span className="nav-logo">ride buddy</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/home">Home</a>
                <div class="dropdown">
                    {/* <button class="dropbtn">Trips
                        <i class="fa fa-caret-down"></i>
                    </button> */}
                    <a className='trips-dropdown' href="/trips">Trips</a>
                    <div class="dropdown-content">
                        <a href="#">Requests</a>
                        <a href="#">Hosted Trips</a>
                        <a href="#">Trip History</a>
                    </div>
                </div>
                <a href="/wheels">Wheels</a>
                <a href="/account">My account</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>

        </div>
    )
}
