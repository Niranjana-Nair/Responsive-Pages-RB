import React from 'react'
import CardItem from '../CardItem/CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Offer Carpool</h1>
        <p>Share your empty car seats in carpool and cut down your commute costs. Enjoy meeting amazing new people every day in carpool, grow your network and make your boring rides a fun ride.</p>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards