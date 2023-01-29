import React from 'react'
import './TripsHostedList.css'

function TripsHostedList() {
  return (
    <div className='trips-hosted-list-container'>
      <p className='trips-hosted-list-title'>Here is the list of trips you have hosted</p>


      <div className='trips-hosted-card'>
        {/* <div className='start-end-location-and-date-time'> */}
        <div className='start-dest-points'>
          <div className='startPoint'>
            From : Kakkanad
          </div>
          <div className='destPoint'>
            To : Infopark
          </div>
        </div>
        <div className='date-and-time-details'>
          <div className='hostedDate'>
            On 03/02/2023
          </div>
          <div className='hostedTime'>
            At 10:45
          </div>
        </div>
        <div className='checkRide-button'>
          <button className='checkRide-btn'>
            Check Ride
          </button>
        </div>
        {/* </div> */}
      </div>


      <div className='trips-hosted-card'>
        {/* <div className='start-end-location-and-date-time'> */}
        <div className='start-dest-points'>
          <div className='startPoint'>
            From : Aluva
          </div>
          <div className='destPoint'>
            To : Infopark
          </div>
        </div>
        <div className='date-and-time-details'>
          <div className='hostedDate'>
            On 03/02/2023
          </div>
          <div className='hostedTime'>
            At 10:45
          </div>
        </div>
        <div className='checkRide-button'>
          <button className='checkRide-btn'>
            Check Ride
          </button>
        </div>
        {/* </div> */}
      </div>

    </div>
  )
}

export default TripsHostedList