import React from 'react'
import './PoolList.css'

function PoolList() {
    return (
        <>
            <div className='available-pools-container'>
                <span className="poolTitle">Here is the list of available pools</span>


                <div className='pool-detail-card'>
                    <div className='poolHost-image-name'>
                        <div className='hostImage'>
                            <img src="https://th.bing.com/th/id/OIP.Bvqwa7btOfZtjER7flS2HAHaLH?w=116&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="100px" width="100px" className='pool-host-image'>

                            </img>
                        </div>
                        <div className='pool-host-name'>
                            Nandagopal
                        </div>
                    </div>
                    <div className='start-end-location'>
                        <div className='start-point'>
                            From : Kakkanad
                        </div>
                        <div className='end-point'>
                            To : Infopark
                        </div>
                        <div className='numberofSeats'>
                            No.of seats : 4
                        </div>
                    </div>
                    <div className='poolRequest-btn'>
                        <button className='poolRequest-button'>
                            Request Pool
                        </button>
                    </div>
                </div>


                <div className='pool-detail-card'>
                    <div className='poolHost-image-name'>
                        <div className='hostImage'>
                            <img src="https://th.bing.com/th/id/OIP.vpccIWxyfWER2pYuFeG0SQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="100px" width="100px" className='pool-host-image'>

                            </img>
                        </div>
                        <div className='pool-host-name'>
                            Anandhu
                        </div>
                    </div>
                    <div className='start-end-location'>
                        <div className='start-point'>
                            From : Aluva
                        </div>
                        <div className='end-point'>
                            To : Infopark
                        </div>
                        <div className='numberofSeats'>
                            No.of seats : 3
                        </div>
                    </div>
                    <div className='poolRequest-btn'>
                        <button className='poolRequest-button'>
                            Request Pool
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default PoolList