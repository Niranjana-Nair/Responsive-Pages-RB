import React from 'react'
import { Link } from 'react-router-dom'
function CardItem() {
    return (
        <>
            <li className='cards__item'>
                <div className='pic-and-text'>
                    <figure className='cards__item__pic-wrap'>
                        <img src="https://t4.ftcdn.net/jpg/02/93/90/19/240_F_293901900_HvOzikmd3NCH5gt8eySedG5DNHJ9xmI5.jpg"
                            alt="Carpool Image"
                            className='cards__item__img' />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                            Same company carpool
                        </h5>
                        <p>Travel safe with known and verified professionals</p>
                    </div>
                </div>

                <div className='pic-and-text'>
                <figure className='cards__item__pic-wrap'>
                    <img src="https://t4.ftcdn.net/jpg/01/43/99/47/240_F_143994701_izrD12Tx7m20lCtD1pXVt35T61GvHa0q.jpg"
                        alt="Carpool Image"
                        className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                        Convenient. Faster. Affordable
                        </h5>
                        <p>Join with like minded people and get a comfortable car ride at the cost of bus fare.</p>
                    </div>
                </div>
                
                <div className='pic-and-text'>
                <figure className='cards__item__pic-wrap'>
                    <img src="https://t3.ftcdn.net/jpg/04/69/99/98/240_F_469999857_LYXN3ujcVqMbKHLVC7wwqZsPHVvWRpgd.jpg"
                        alt="Carpool Image"
                        className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                        Convenient. Faster. Affordable
                        </h5>
                        <p>Join with like minded people and get a comfortable car ride at the cost of bus fare.</p>
                    </div>
                </div>

                <figure className='cards__item__pic-wrap'>
                    <img src="https://t3.ftcdn.net/jpg/02/21/30/10/240_F_221301042_DnyTwN6iedFcQLueBBj88c73CHWr6Nr9.jpg"
                        alt="Carpool Image"
                        className='cards__item__img' />
                </figure>


                <figure className='cards__item__pic-wrap'>
                    <img src="https://t3.ftcdn.net/jpg/04/10/40/82/240_F_410408225_txyilt6bZmHJyXUKSn7e871WbQ3qCVmw.jpg"
                        alt="Carpool Image"
                        className='cards__item__img' />
                </figure>

                <figure className='cards__item__pic-wrap'>
                    <img src="https://t3.ftcdn.net/jpg/02/93/90/24/240_F_293902444_klL6BsB10oGPG8FO10k73zlycj0w9iSj.jpg"
                        alt="Carpool Image"
                        className='cards__item__img' />
                </figure>

            </li>
        </>
    )
}

export default CardItem