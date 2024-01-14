import React from 'react'

function Forecast({title}) {
    return (

        <div className="container">
            <div className="row">

                <div className="row">
                    <div className='d-flex align-items-center border-bottom my-4 '>
                        <p>{title}</p>
                        <hr />
                    </div>

                </div>

                <div className="row">

                    <div className=" d-flex flex-row justify-content-between">


                        <div className="d-flex flex-column align-items-center">
                            <div className="d-flex flex-column">

                                <p className='font-weight-light'>
                                    time pm
                                </p>

                                <img src="" alt="" />
                                <p> degree</p>
                            </div>
                        </div>

                        <div className='d-flex flex-row flex-column align-items-center'>
                            <div className='d-flex flex-column'>
                                <p className='font-weight-light'>
                                    time pm
                                </p>

                                <img src="" alt="" />
                                <p> degree</p>
                            </div>
                        </div>

                        <div className='d-flex flex-row flex-column align-items-center'>
                            <div className='d-flex flex-column'>
                                <p className='font-weight-light'>
                                    time pm
                                </p>

                                <img src="" alt="" />
                                <p> degree</p>
                            </div>
                        </div>

                        <div className='d-flex flex-row flex-column align-items-center'>
                            <div className='d-flex flex-column'>
                                <p className='font-weight-light'>
                                    time pm
                                </p>

                                <img src="" alt="" />
                                <p> degree</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>



    )
}

export default Forecast