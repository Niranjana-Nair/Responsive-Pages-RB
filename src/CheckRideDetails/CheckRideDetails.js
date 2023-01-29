import React from 'react'
import './CheckRideDetails.css'

function CheckRideDetails() {
    return (
        <div className='check-ride-details-container'>
            <p className='check-ride-details-title'>
                Here is the detailed view of the ride you hosted
            </p>
            <div className='check-ride-details-card'>
                <div className='check-ride-start-and-end-point'>
                    <div className='check-ride-start-pt'>
                        From : Aluva
                    </div>
                    <div className='check-ride-end-pt'>
                        To :  Infopark
                    </div>
                </div>
                <div className='check-ride-no-of-seats-left'>
                    <div className='seatsLeft'>
                        Seats left : 3
                    </div>
                </div>
                <div className='check-ride-start-and-cancel-ride-btns'>
                    <div className='start-ride-Btn'>
                        <button className='start-ride-Button'>
                            Start Pool
                        </button>
                    </div>
                    <div className='cancel-ride-Btn'>
                        <button className='cancel-ride-Button'>
                            Cancel Pool
                        </button>
                    </div>
                </div>
            </div>

            <p className='you-invited-title'>You invited them to join your pool......</p>
            <div className='you-invited-them-to-join-block'>
                {/* <p className='you-invited-title'>You invited them to join your pool......</p> */}
                <div className='you-invited-card'>
                    <div className='invited-buddy-img-and-name'>
                        <div className='invited-buddy-img'>
                            <img src="https://th.bing.com/th?id=OIP.RZit-f8kmjDv27MWUOguJwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='invited-buddy-Image' height="100px" width="100px">

                            </img>
                        </div>
                        <div className='invited-buddy-Name'>
                            Sreedevi
                        </div>
                    </div>
                    <div className='buddy-invitation-Status'>
                        Accepted
                    </div>
                </div>
                {/* <div className='you-invited-card'>
                    <div className='invited-buddy-img-and-name'>
                        <div className='invited-buddy-img'>
                            <img src="https://th.bing.com/th?id=OIP.RZit-f8kmjDv27MWUOguJwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='invited-buddy-Image' height="100px" width="100px">

                            </img>
                        </div>
                        <div className='invited-buddy-Name'>
                            Sreedevi
                        </div>
                    </div>
                    <div className='buddy-invitation-Status'>
                        Accepted
                    </div>
                </div> */}

            </div>

            <p className='they-are-requesting-pool-title'>They are requesting to join your pool......</p>
            <div className='they-are-requesting-pool-block'>
                {/* <p className='they-are-requesting-pool-title'>
                    They are requesting to join your pool......
                </p> */}

                <div className='buddies-request-card'>
                    <div className='buddies-request-img-name-id'>
                        <div className='buddies-request-img'>
                            <img src="https://th.bing.com/th?id=OIP.GeAA0FO3BwC_e47_zDJbsgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='buddies-request-Img' width="100px" height="100px">

                            </img>
                        </div>
                        <div className='buddies-request-Name'>
                            John
                        </div>
                        <div className='buddies-request-id'>
                            SYT657
                        </div>
                    </div>
                    <div className='buddies-start-and-end-pt'>
                        <div className='buddies-start-pt'>
                           From : Edachira
                        </div>
                        <div className='buddies-end-pt'>
                           To : Infopark
                        </div>
                    </div>
                    <div className='request-accept-deny-btns'>
                        <div className='request-accept-Button'>
                            <button className='request-accept-Btn'>
                                Accept
                            </button>
                        </div>
                        <div className='request-deny-Button'>
                            <button className='request-deny-Btn'>
                                Turn down
                            </button>
                        </div>
                    </div>
                </div>




                {/* <div className='buddies-request-card'>
                    <div className='buddies-request-img-name-id'>
                        <div className='buddies-request-img'>
                            <img src="https://th.bing.com/th?id=OIP.GeAA0FO3BwC_e47_zDJbsgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='buddies-request-Img' width="100px" height="100px">

                            </img>
                        </div>
                        <div className='buddies-request-Name'>
                            John
                        </div>
                        <div className='buddies-request-id'>
                            SYT657
                        </div>
                    </div>
                    <div className='buddies-start-and-end-pt'>
                        <div className='buddies-start-pt'>
                            Edachira
                        </div>
                        <div className='buddies-end-pt'>
                            Infopark
                        </div>
                    </div>
                    <div className='request-accept-deny-btns'>
                        <div className='request-accept-Button'>
                            <button className='request-accept-Btn'>
                                Accept
                            </button>
                        </div>
                        <div className='request-deny-Button'>
                            <button className='request-deny-Btn'>
                                Turn down
                            </button>
                        </div>
                    </div>
                </div> */}




            </div>

        </div>
    )
}

export default CheckRideDetails