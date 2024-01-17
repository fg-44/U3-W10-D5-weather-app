import React from 'react'
import { formatToLocalTime } from '../Service/Weather'

function TimeLocations({weather:{dt, timezone, name, country}}) {
    return (
        <div>
            <div className='d.flex justify-center my-6'>
                <p className='text-white'>{formatToLocalTime (dt, timezone)}</p>
            </div>
            <div className='d.flex justify-center my-6'>
                <p className='text-white'>{
                `${name},
                 ${country}`
                 }</p>
            </div>
        </div>
    )
}

export default TimeLocations