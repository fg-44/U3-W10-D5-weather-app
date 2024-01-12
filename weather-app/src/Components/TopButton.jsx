import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function TopButton() {
  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Hong kong',
    },
    {
      id: 3,
      title: 'Toronto',
    },
    {
      id: 4,
      title: 'Mumbai',
    },
    {
      id: 5,
      title: 'Sydney',
    },
    {
      id: 6,
      title: 'Cape Town',
    }

  ]

  return (
    <div className=' my-6'>

      {cities.map((city) => (

            <Button key={city.id} className='bg-transparent outline-none'>{city.title}</Button>
)
      )}

    </div>
  )
}

export default TopButton