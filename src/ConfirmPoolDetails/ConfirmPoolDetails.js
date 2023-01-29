import React from 'react'
import './ConfirmPoolDetails.css'
import { useState } from 'react'

function ConfirmPoolDetails() {

    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
        setCounter(counter + 1)
    }

    const handleClick2 = () => {
        setCounter(counter - 1)
    }

    return (
        <div className='confirm-pool-details-container'>
            <p className='confirm-pool-title'>
                Verify pool details
            </p>
            <div className='confirm-pool-details-card'>
                <div className='ride-host-img-name-id-start-end-points-date-time'>
                    <div className='ride-host-img-name-id'>
                        <div className='ride-host-img'>
                            <img src='https://th.bing.com/th?id=OIP.eIEz73xZoLmYwqTF92FciwHaEw&w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' className='ride-host-image' height="100px" width="100px">

                            </img>
                        </div>
                        <div className='ride-host-Name'>
                            Nandagopal
                        </div>
                        <div className='ride-host-Id'>
                            SYT865
                        </div>
                    </div>
                    <div className='start-end-points-date-time'>
                        <div className='start-Endpoints'>
                            <div className='startPoint'>
                                From : Kakkanad
                            </div>
                            <div className='endPoint'>
                                To : Infopark
                            </div>
                        </div>
                        <div className='dateTime'>
                            <div className='rideDate'>
                                On 03/02/2023
                            </div>
                            <div className='rideTime'>
                                At 10:30
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ride-wheel-details'>
                    <div className='wheel-name-number-image'>
                        <div className='ride-wheel-image'>
                            <img src="https://th.bing.com/th/id/OIP.6LUi5FiEQ5xY_YGmyXyINAHaEo?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='ride-wheelImg' height="100px" width="100px">

                            </img>
                        </div>
                        <div className='ride-wheel-name'>
                            Range Rover
                        </div>
                        <div className='ride-wheel-number'>
                            KL29T4057
                        </div>
                    </div>
                </div>
                <div className='selectSeats-dropoffLocations-riders'>
                    <div className='selectSeats'>
                        <button className="add-seat" onClick={handleClick1}>+</button>
                        {counter}
                        <button className="delete-seat" onClick={handleClick2}>-</button>
                    </div>
                    <div className='select-multiple-dropoff-locations'>
                        comes here......
                    </div>
                </div>
                <div className='verify-pool-btn'>
                    <button className='send-pool-request-btn'>Send Request</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPoolDetails