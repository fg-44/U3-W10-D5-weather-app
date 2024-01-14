import React from 'react'
import { Sunset, Sunrise, Thermometer, ArrowDownRightSquare, ArrowUpRightSquare, Moisture, Wind } from 'react-bootstrap-icons'

function TemperatureDetails() {
  return (

    <div className='container'>

      <div className='row'>
        <div className='d-flex items-center justify-center py-6'>
          <p>cloudy or whatewer</p>
        </div>
      </div>

      {/* ------------------------------------ SEZIONE CENTRALE ------------------------------------*/}

      <div className='row'>
        <div className='d-flex flex-row align-items-center justify-content-between p-3'>

          <div className='d-flex flex-row align-items-center justify-content-between py-3'>
            <img src="#" alt="" /> < Sunset size={20} />
            <p className='text-5xl'>34</p>
          </div>

          <div className='d-flex flex-col my-2'>
            <div className='flex font-light text-sm align-items-center justify-content-center'></div>
          </div>

          <div>

            <div className='d-flex flex-col my-2'>
              <Thermometer size={20} />
              <p>rea fell: <span>32</span></p>
            </div>

            <div className='d-flex flex-col my-2'>
              <Moisture size={20} />
              <p>rea fell: <span>32</span></p>
            </div>

            <div className='d-flex flex-col soace-y-2'>
              <Wind size={20} />
              <p>rea fell: <span>32</span></p>
            </div>

          </div>

        </div>
      </div>

      {/* -------------------------------------------------------------------------------------*/}


      <div className='row'>
        <div className='d-flex align-items-center justify-content-center flex-col space-y-2'>

          <div className='d-flex align-items-center justify-content-center my-2' >
            <Sunset size={30} />
            <p>rise: <span className='font-weight-bolder'>testo</span></p>
          </div >


          <div className='d-flex align-items-center justify-content-center my-2'>
            <Sunrise size={20} />
            <p>testo: <span className='font-weight-bolder'>testo</span></p>
          </div>

          <div className='d-flex align-items-center justify-content-center my-2'>
            <ArrowDownRightSquare size={20} />
            <p>testo:<span>testo</span></p>
          </div>

          <div className='d-flex align-items-center justify-content-center my-2'>
            <ArrowUpRightSquare size={20} />
            <p>testo: <span>testo</span></p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default TemperatureDetails




